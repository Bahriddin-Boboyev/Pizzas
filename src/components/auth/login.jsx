import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAxiosFunction } from '@/hooks';
import { postLogin } from '@/helpers';
import { Icons } from '@/img';
import { ReactSVG } from 'react-svg';

export const Login = ({ context, showModal }) => {
  // eslint-disable-next-line
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // post login
  const fetchLogin = (data) => {
    toast.loading('Loading...', { toastId: 2 });
    postLogin(axiosFetch, data);
  };

  // submit func
  const handlerLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      fetchLogin({ email, password });
      setEmail('');
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
    <div
      className={`${
        context?.modal?.hidden && context?.modal?.type === 'login' ? 'login__modal login__modal--sign' : 'none'
      }`}
    >
      <h2>Вход в аккаунт</h2>
      <p>Сможете быстро оформлять заказы, использовать бонусы </p>
      <form className="login__modal-box" onSubmit={(event) => handlerLogin(event)}>
        <input
          value={email}
          required
          type="email"
          placeholder="электронная почта"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          value={password}
          required
          type="password"
          placeholder="пароль"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Войти</button>
        <p>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
        <p className="login-modal__est-acc">
          Нужен аккаунт? <span onClick={() => showModal({ hidden: true, type: 'register' })}>Зарегистрироваться</span>
        </p>
      </form>
      <button className="btn__login-modal" onClick={() => showModal({ hidden: false })}>
        <ReactSVG src={Icons.close} />
      </button>
    </div>
  );
};
