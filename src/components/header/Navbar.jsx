import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import locationIcon from "../../img/location.svg";
import pizza from "../../img/navbar-pizza.svg";
import logo from "../../img/navbar-logo.svg";
import korzinka from "../../img/navbar-korzinka.svg";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);

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
            <p>Войти в аккаунт</p>
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
          <button>
            <img src={korzinka} alt="korzinka" />
            <span>0 ₽</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
