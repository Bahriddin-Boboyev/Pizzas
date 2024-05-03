import './style.scss';
import { useContext, useState, useEffect, useRef } from 'react';
import { DataContext } from '@/context';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { toast } from 'react-toastify';
import { toastNotification, postEditMe } from '@/helpers';
import { inputValue, inputValuePassword } from '@/constants';
import { ReactSVG } from 'react-svg';
import { Icons } from '@/img';
import { useAxiosFunction, useInputValue, usePasswordToggle } from '@/hooks';
import { Helmet } from 'react-helmet-async';

const inputs = {
  name: '',
  phone: '',
  email: '',
  oldPassword: '',
  newPassword: '',
  rePassword: '',
};

export const MyAccountSettings = () => {
  const { context, getSendTypes } = useContext(DataContext);
  const [isShow, setIsShow] = useState(true);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const { value, change } = useInputValue(inputs);
  const [data, error, loading, axiosFetch] = useAxiosFunction();
  const [toggleIcon1, passwordType1, setVisibility1] = usePasswordToggle(false);
  const [toggleIcon2, passwordType2, setVisibility2] = usePasswordToggle(false);
  const [toggleIcon3, passwordType3, setVisibility3] = usePasswordToggle(false);
  const isSubmit = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: 'all' });

  const handleSubmitValue = () => {
    const values = {};
    if (value.name) values.name = value.name;
    if (value.phone) values.phone = value.phone;
    if (value.email) values.email = value.email;

    axiosFetch('clear');
    postEditMe(axiosFetch, values);
    toast.loading('Loading...', { toastId: 4 });
    isSubmit.current = false;
  };

  const handleSubmitPassword = (event) => {
    event.preventDefault();
    if (value?.newPassword !== value?.rePassword) return;
    axiosFetch('clear');
    postEditMe(axiosFetch, value.password);
    toast.loading('Loading...', { toastId: 5 });
    isSubmit.current = false;
  };

  const meInfo = inputValue(context?.types?.meInfo);
  const meInfoPassword = inputValuePassword();

  useEffect(() => {
    if (!loading && !isSubmit.current && (data?.data || error)) {
      if (data) {
        toastNotification(4, 'success', 'User updated successfully!');
        toastNotification(5, 'success', 'User password update successfully!');
        getSendTypes({ meInfo: data?.data });
        setIsShow(true);
        setIsShowPassword(true);
        change('clear');
      }
      if (error) {
        toastNotification(4, 'error', error);
        toastNotification(5, 'error', error);
      }
      isSubmit.current = true;
    }
    // eslint-disable-next-line
  }, [data, error]);

  const disabled =
    value?.newPassword !== value?.rePassword ||
    value.oldPassword === '' ||
    value.newPassword === '' ||
    value.rePassword === '';

  const handleLogOut = () => {
    localStorage.removeItem('token');
    toast.success('You are logged out');
    window.location.href = '/';
  };

  return (
    <section className="me-settings">
       <Helmet>
        <title>Куда пицца | Мой аккаунт</title>
      </Helmet>
      <h1>Мой аккаунт</h1>
      <div className="me-settings__cards me-settings__cards--edit">
        {isShow ? (
          <>
            <div className="me-settings__headers">
              <h4>Личные данные</h4>
              <button onClick={() => setIsShow(false)}>
                <img src={Icons.editMeIcon} alt="edit" />
                <span>Изменить</span>
              </button>
            </div>
            <ul className="me-settings__body-list">
              {meInfo?.map((item) => (
                <li key={item?.name}>
                  <span className="me-settings__name-item">{item.labelName}</span>
                  <span className="me-settings__value-item">{item.value}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div className="me-settings__headers">
              <h4>Изменение личных данных</h4>
              <button onClick={() => setIsShow(true)}>
                <ReactSVG className="close-img" src={Icons.close} />
              </button>
            </div>
            <form onSubmit={handleSubmit(handleSubmitValue)}>
              <ul className="me-settings__body-list--edit">
                {meInfo?.map((item) => (
                  <li key={item?.name}>
                    <label htmlFor="edit-input" className="me-settings__name-item--edit">
                      {item.labelName}
                    </label>
                    <input
                      {...register(`${item.name}`, {
                        required: 'This input is required.',
                      })}
                      type={item.name === 'email' ? 'email' : item.name === 'phone' ? 'number' : 'text'}
                      name={item.name}
                      onChange={change}
                      id="edit-input"
                      placeholder={item.placeholder}
                      className="me-settings__value-item--edit"
                      defaultValue={item.value}
                    />
                    <ErrorMessage
                      errors={errors}
                      name={item.name}
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p className="error-message" key={type}>
                                {message}
                              </p>
                            ))
                          : null;
                      }}
                    />
                  </li>
                ))}
              </ul>
              <button className="btn edit-me-btn" type="submit">
                Сохранить изменения
              </button>
            </form>
          </>
        )}
      </div>
      <div className="me-settings__cards cards_2">
        <div className="me-settings__headers">
          {isShowPassword ? (
            <>
              <h4>Пароль</h4>
              <button onClick={() => setIsShowPassword(false)}>
                <img src={Icons.editMeIcon} alt="edit" />
                <span>Изменить</span>
              </button>
            </>
          ) : (
            <>
              <h4>Изменить пароль</h4>
              <button onClick={() => setIsShowPassword(true)}>
                <ReactSVG className="close-img" src={Icons.close} />
              </button>
            </>
          )}
        </div>
        {!isShowPassword && (
          <form onSubmit={handleSubmitPassword}>
            <ul className="me-settings__body-list--edit">
              {meInfoPassword?.map((item, index) => {
                let toggleIcon, passwordType, setVisibility;
                switch (index) {
                  case 0:
                    toggleIcon = toggleIcon1;
                    passwordType = passwordType1;
                    setVisibility = setVisibility1;
                    break;
                  case 1:
                    toggleIcon = toggleIcon2;
                    passwordType = passwordType2;
                    setVisibility = setVisibility2;
                    break;
                  case 2:
                    toggleIcon = toggleIcon3;
                    passwordType = passwordType3;
                    setVisibility = setVisibility3;
                    break;
                  default:
                    break;
                }
                return (
                  <li key={item.labelName}>
                    <label htmlFor={`edit-input-password-${item.name}`} className="me-settings__name-item--edit">
                      {item.labelName}
                    </label>
                    <input
                      required
                      name={item.name}
                      type={passwordType}
                      className="me-settings__value-item--edit"
                      id={`edit-input-password-${item.name}`}
                      placeholder={item.placeholder}
                      value={value[`${item.name}`]}
                      onChange={change}
                    />
                    <span onClick={() => setVisibility((prev) => !prev)} className="login__icon">
                      <img src={toggleIcon} alt="icon" />
                    </span>
                    {value.newPassword !== value.rePassword ? (
                      item.name === 'rePassword' ? (
                        <span className="error-message">Parollar mos emas!</span>
                      ) : (
                        <span className="error-message-span"></span>
                      )
                    ) : (
                      <span className="error-message-span"></span>
                    )}
                  </li>
                );
              })}
            </ul>
            <button className={`btn edit-me-btn ${disabled ? 'disabled' : ''}`} type="submit" disabled={disabled}>
              Сохранить изменения
            </button>
          </form>
        )}
      </div>
      <div className="me-settings__cards cards_3">
        <div>
          <h4>Подписки</h4>
          <div className="input-block">
            <input type="checkbox" id="settings-checkbox" defaultChecked className="settings-checkbox" />
            <span></span>
            <label htmlFor="settings-checkbox">Получать предложения и акции</label>
          </div>
        </div>
        <button className="btn btn-logout" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </section>
  );
};
