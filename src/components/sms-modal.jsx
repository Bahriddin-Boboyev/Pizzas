import './auth/style.scss';
import { useState, useEffect } from 'react';
import { useAxiosFunction } from '@/hooks';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { TimerComponent } from './time';
import { getMe, getSendMailer, postCode } from '@/helpers';

export const SmsModal = ({ context, showModal, getSendTypes }) => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [response2, error2, loading2, axiosFetch2] = useAxiosFunction();
  const [code, setCode] = useState('');
  const ref = useRef(true);
  const submitRef = useRef(true);

  // submit func
  const handlerSubmit = (event) => {
    event.preventDefault();
    if (code && submitRef.current) {
      axiosFetch('clear');
      postCode(axiosFetch, { code: code });
      setCode('');
      submitRef.current = false;
    }
  };

  useEffect(() => {
    if (context?.types?.smsMailModal && ref.current) {
      axiosFetch('clear');
      getSendMailer(axiosFetch);
      getSendTypes({ loading: true });
      ref.current = false;
    }

    if (context?.types?.smsMailModal && !loading && (error || response.data)) {
      showModal({ hidden: true, type: 'smsModal' });
      getSendTypes({ loading: false, smsMailModal: false, smsMail: 'pending' });
    }

    if (context?.types?.smsMail === 'pending' && response?.data) {
      getSendTypes({ smsMail: 'success' });
      toast.success(response.data);
    }

    if (context?.types?.smsMail === 'pending' && error) {
      getSendTypes({ smsMail: 'reject' });
      toast.error(error);
      showModal({ hidden: false, type: 'smsModal' });
      console.log(response, error);
    }

    if (response.data === "Kod to'g'ri kiritildi" && !submitRef.current) {
      toast.success(response.data);
      getSendTypes({ smsCode: 'success' });
      showModal({ hidden: false, type: 'smsModal' });
      submitRef.current = true;
      toast.loading('Loading...', { toastId: 3 });
    }

    if (error && !submitRef.current) {
      toast.error(error);
      getSendTypes({ smsCode: 'reject' });
      submitRef.current = true;
    }
    // eslint-disable-next-line
  }, [context, response, error, submitRef]);

  useEffect(() => {
    getMe(axiosFetch2);
  }, []);

  const handleResendCode = () => {
    getSendTypes({ smsMailModal: true, msZero: false });
    ref.current = true;
  };

  return (
    <div
      className={`${
        context?.modal?.hidden && context?.modal?.type === 'smsModal' ? 'login__modal login__modal--sms' : 'none'
      }`}
    >
      <h2>Код из смс</h2>
      <p className="login__modal__deck">
        На электронная почта <br />
        <span>{response2?.data?.email}</span>
      </p>
      <form className="login__modal-box" onSubmit={(event) => handlerSubmit(event)}>
        <input
          value={code}
          required
          type="number"
          placeholder="1234"
          onChange={(event) => setCode(event.target.value)}
        />
        <button
          type="submit"
          disabled={context?.types?.msZero}
          className={context?.types?.msZero ? 'btn-disabled' : ''}
        >
          Войти
        </button>
        <p className="login__modal__code_deck">
          Отправить код ещё раз через:{' '}
          {context?.types?.msZero ? (
            <span id="send-btn" onClick={handleResendCode}>
              Отправить
            </span>
          ) : (
            <span>
              {context?.types?.smsMail === 'success' ? <TimerComponent time={1} repeat={false} /> : '00'} секунд
            </span>
          )}
        </p>

        <p className="check__spam-text">
          Если вы не видите код, Зайдите в электронную почту и проверьте папку со спамом.
        </p>
      </form>
      <button className="btn__login-modal" onClick={() => showModal({ hidden: false })}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g clipPath="url(#clip0_236_29161)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.77617 0.304743C1.36985 -0.101581 0.711067 -0.101581 0.304743 0.304743C-0.101581 0.711067 -0.101581 1.36985 0.304743 1.77617L14.5286 16L0.304752 30.2238C-0.101572 30.6302 -0.101572 31.2889 0.304752 31.6953C0.711076 32.1016 1.36986 32.1016 1.77618 31.6953L16 17.4714L30.2238 31.6953C30.6301 32.1016 31.2889 32.1016 31.6953 31.6953C32.1016 31.2889 32.1016 30.6301 31.6953 30.2238L17.4714 16L31.6953 1.77618C32.1016 1.36985 32.1016 0.71107 31.6953 0.304746C31.2889 -0.101578 30.6302 -0.101578 30.2238 0.304746L16 14.5286L1.77617 0.304743Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_236_29161">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};
