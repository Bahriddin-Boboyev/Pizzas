import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { postLogin } from "../../hooks";
import useAxiosFunction from "../../hooks/useAxiosFunction";

const Login = ({ context, showModal }) => {
  // eslint-disable-next-line
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // post login
  const fetchLogin = (data) => {
    toast.loading("Loading...", { toastId: 2 });
    postLogin(axiosFetch, data);
  };

  // submit func
  const handlerLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      fetchLogin({ email, password });
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    // set token
    if (response?.data) {
      localStorage.setItem("token", JSON.stringify(response?.data));
      showModal({ hidden: false });
    }
  }, [response?.data]);

  return (
    <div
      className={`${
        context?.modal?.hidden && context?.modal?.type === "login"
          ? "login__modal login__modal--sign"
          : "none"
      }`}
    >
      <h2>Вход в аккаунт</h2>
      <p>Сможете быстро оформлять заказы, использовать бонусы </p>
      <form
        className="login__modal-box"
        onSubmit={(event) => handlerLogin(event)}
      >
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
        <p>
          Продолжая, вы соглашаетесь со сбором и обработкой персональных данных
          и пользовательским соглашением
        </p>
        <p className="login-modal__est-acc">
          Нужен аккаунт?{" "}
          <span onClick={() => showModal({ hidden: true, type: "register" })}>
            Зарегистрироваться
          </span>
        </p>
      </form>
      <button
        className="btn__login-modal"
        onClick={() => showModal({ hidden: false })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
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

export default Login;
