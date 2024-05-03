import './style.scss';
import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { useAxiosFunction } from '@/hooks';
import { postRegister } from '@/helpers';
import { Icons } from '@/img';
import { ReactSVG } from 'react-svg';
import { DataContext } from '@/context';

export const Register = () => {
  // eslint-disable-next-line
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const { context, showModal } = useContext(DataContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  // post register
  const fetchRegister = (data) => {
    toast.loading('Loading...', {
      toastId: 2,
    });
    postRegister(axiosFetch, data);
  };

  // submit func
  const handlerRegister = (event) => {
    event.preventDefault();
    if (name && email && phone && password) {
      fetchRegister({ name, email, phone, password });
      setEmail('');
      setName('');
      setPhone('');
      setPassword('');
    }
  };

  useEffect(() => {
    // set token
    if (response?.data) {
      localStorage.setItem('token', JSON.stringify(response?.data));
      showModal({ hidden: false });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    // eslint-disable-next-line
  }, [response?.data]);

  return (
    <div className={`${context?.modal?.hidden && context?.modal?.type === 'register' ? 'login__modal' : 'none'}`}>
      <h1>Зарегистрировать аккаунт</h1>
      <p>Сможете быстро оформлять заказы, использовать бонусы </p>
      <form className="login__modal-box" onSubmit={(event) => handlerRegister(event)}>
        <input value={name} required type="text" placeholder="имя" onChange={(event) => setName(event.target.value)} />
        <input
          value={email}
          required
          type="email"
          placeholder="электронная почта"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          value={phone}
          required
          type="number"
          placeholder="+998"
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          value={password}
          required
          type="password"
          placeholder="пароль"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Регистрация</button>
        <p>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
        <p className="login-modal__est-acc">
          У вас уже есть аккаунт? <span onClick={() => showModal({ hidden: true, type: 'login' })}>Авторизоваться</span>
        </p>
      </form>
      <button className="btn__login-modal" onClick={() => showModal({ hidden: false })}>
        <ReactSVG src={Icons.close} />
      </button>
    </div>
  );
};
