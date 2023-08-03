import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import locationIcon from "../../img/location.svg";
import pizza from "../../img/navbar-pizza.svg";
import logo from "../../img/navbar-logo.svg";
import korzinka from "../../img/navbar-korzinka.svg";

const Navbar = () => {
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
      <div className="navbar__down">
        <div className="navbar__down-img-block">
          <img src={pizza} alt="pizza" />
          <img src={logo} alt="logo" />
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
