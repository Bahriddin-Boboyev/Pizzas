import React, { useContext, useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import locationIcon from "../../img/location.svg";
import pizza from "../../img/navbar-pizza.svg";
import logo from "../../img/navbar-logo.svg";
import korzinka from "../../img/navbar-korzinka.svg";
import korzinka2 from "../../img/korzinka-2.svg";
import { DataContext } from "../../context";
import Register from "../auth/register";
import Login from "../auth/login";
import { useScrollFixed, storeTotalCost, storeTotalCount } from "../../helpers";
import useLocalStorageState from "use-local-storage-state";

const Navbar = () => {
  const { context, showBasket, showLogin } = useContext(DataContext);
  const [toggle, setToggle] = useState(false);
  const [cart] = useLocalStorageState("cart", []);

  const fixed = useScrollFixed(50);

  // timer
  const [seconds, setSeconds] = useState(35 * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 0) {
          return 35 * 60;
        } else {
          return seconds - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <nav className="navbar">
      <div className="navbar__main container">
        <div className="navbar__section-1">
          <div className="navbar__section_1_block">
            <div className="navbar__img_block">
              <img src={locationIcon} alt="location" />
            </div>
            <select name="city" id="city">
              <option
                className="options"
                value="moscow"
                defaultValue={"moscow"}
              >
                Москва
              </option>
              s
              <option className="options" value="tomsk">
                Томск
              </option>
              <option className="options" value="kazan">
                Казань
              </option>
            </select>
          </div>
          <div className="navbar__item navbar__item--locations">
            <Link to={"#"}>Проверить адрес</Link>
          </div>
          <div className="navbar__item">
            <Link to={"#"}>
              Среднее время доставки*:{" "}
              <span>{`${minutes}:${
                remainingSeconds < 10 ? "0" : ""
              }${remainingSeconds}`}</span>
            </Link>
          </div>
        </div>
        <div className="navbar__section-2">
          <div className="navbar__item-2 navbar__item-2--work">
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
      <div className="navbar__line container"></div>
      <div className={`container ${fixed ? "fixed-helper" : ""}`}></div>
      <div className={`navbar__down ${fixed ? "fixed" : ""}`}>
        <div className="navbar__wrapper">
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
          <div
            class={`menu menu_btn ${toggle ? "open" : ""}`}
            onClick={() => setToggle((prev) => !prev)}
          >
            <div class="icon-E"></div>
            <div class="icon-X"></div>
          </div>
        </div>
      </div>
      <Register context={context} showLogin={showLogin} />
      <Login context={context} showLogin={showLogin} />
      <div className="navbar__basket-shop--box">
        <button onClick={() => showBasket(true)}>
          <img src={korzinka2} alt="korzinka 2" />
          <span>{storeTotalCount(cart)}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
