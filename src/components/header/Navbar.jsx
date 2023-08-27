import React, { useContext } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import locationIcon from "../../img/location.svg";
import pizza from "../../img/navbar-pizza.svg";
import logo from "../../img/navbar-logo.svg";
import korzinka from "../../img/navbar-korzinka.svg";
import { DataContext } from "../../context";
import { useScrollFixed, storeTotalCost } from "../../helpers";
import Register from "../auth/register";
import Login from "../auth/login";

const Navbar = ({ cart }) => {
  const { context, showBasket, showLogin } = useContext(DataContext);
  //
  const fixed = useScrollFixed(60);

  return (
    <nav className="navbar container">
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
            <button
              onClick={() => showLogin({ hidden: true, type: "register" })}
            >
              Войти в аккаунт
            </button>
          </div>
        </div>
      </div>
      <div className="navbar__line"></div>
      <div className={`navbar__down ${fixed ? "fixed" : ""}`}>
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
            <span>{storeTotalCost(cart)} ₽</span>
          </button>
        </div>
      </div>
      <Register context={context} showLogin={showLogin} />
      <Login context={context} showLogin={showLogin} />
    </nav>
  );
};

export default Navbar;
