import React, { useContext, useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import locationIcon from "../../img/location.svg";
import pizza from "../../img/navbar-pizza.svg";
import logo from "../../img/navbar-logo.svg";
import korzinka from "../../img/navbar-korzinka.svg";
import { DataContext } from "../../context";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const { context, showBasket, showLogin } = useContext(DataContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });

  return (
    <nav className="navbar">
      <div className="navbar__main">
        <div className="navbar__section-1">
          <div className="navbar__section_1_block">
            <div className="navbar__img_block">
              <img src={locationIcon} alt="location" />
            </div>
            <p className="navbar__location">Москва</p>
          </div>
          <div className="navbar__item">
            <Link to={"#"}>Проверить адрес</Link>
          </div>
          <div className="navbar__item">
            <Link to={"#"}>
              Среднее время доставки*: <span>00:24:19</span>
            </Link>
          </div>
        </div>
        <div className="navbar__section-2">
          <div className="navbar__item-2">
            <p>Время работы: с 11:00 до 23:00</p>
          </div>
          <div className="navbar__section-2-login">
            <button onClick={() => showLogin(true)}>Войти в аккаунт</button>
          </div>
        </div>
      </div>
      <div className="navbar__line"></div>
      <div className={`navbar__down  ${fixed ? "fixed" : ""}`}>
        <Link to={"/"} className="navbar__down-img-block">
          <img src={pizza} alt="pizza" />
          <img src={logo} alt="logo" />
        </Link>
        <div className={`navbar__down__category  ${!fixed ? "none" : ""}`}>
          <Link to="/menu/fire">Акции</Link>
          <Link to="/menu/pizzas">Пицца</Link>
          <Link to="/menu/sushi">Суши</Link>
          <Link to="/menu/drink">Напитки</Link>
          <Link to="/menu/snacks">Закуски</Link>
          <Link to="/menu/combo">Комбо</Link>
          <Link to="/menu/desserts">Десерты</Link>
          <Link to="/menu/sauce">Соусы</Link>
        </div>
        <div className="navbar__down-korzinka-block">
          <button onClick={() => showBasket(true)}>
            <img src={korzinka} alt="korzinka" />
            <span>0 ₽</span>
          </button>
        </div>
      </div>
      <div className={`${context.login ? "login__modal" : "none"}`}>
        <h2>Вход в аккаунт</h2>
        <p>Сможете быстро оформлять заказы, использовать бонусы </p>
        <form className="login__modal-box">
          <h4>Номер телефона</h4>
          <input type="number" placeholder="+998" />
          <button>Войти</button>
          <p>
            Продолжая, вы соглашаетесь со сбором и обработкой персональных
            данных и пользовательским соглашением
          </p>
        </form>
        <button className="btn__login-modal" onClick={() => showLogin(false)}>
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
    </nav>
  );
};

export default Navbar;
