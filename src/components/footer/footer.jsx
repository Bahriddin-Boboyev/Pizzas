import React from "react";
import "./footer.scss";
import logo1 from "../../img/navbar-pizza.svg";
import logo2 from "../../img/navbar-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__box">
        <div className="footer__box-logo">
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
        </div>
        <ul className="footer__list">
          <li className="footer__item">
            <h2>Куда пицца</h2>
            <ul className="footer__inner-list">
              <li className="footer__inner-item">
                <Link to={"#"}>О компании</Link>
              </li>
              <li className="footer__inner-item">
                <Link to={"#"}>Пользовательское соглашение</Link>
              </li>
              <li className="footer__inner-item">
                <Link to={"#"}>Условия гарантии</Link>
              </li>
            </ul>
          </li>
          <li className="footer__item">
            <h2>Куда пицца</h2>
            <ul className="footer__inner-list">
              <li className="footer__inner-item">
                <Link to={"#"}>Помощь</Link>
              </li>
              <li className="footer__inner-item">
                <Link to={"#"}>Ресторан</Link>
              </li>
              <li className="footer__inner-item">
                <Link to={"#"}>Контакты</Link>
              </li>
              <li className="footer__inner-item">
                <Link to={"#"}>Поддержка</Link>
              </li>
              <li className="footer__inner-item">
                <Link to={"#"}>Отследить заказ</Link>
              </li>
            </ul>
          </li>
          <li className="footer__item">
            <h2>Контакты</h2>
            <ul className="footer__inner-list">
              <li className="footer__inner-item">
                <Link className="footer__phone" to={"tel:+79262231011"}>
                  +7 (926) 223-10-11
                </Link>
              </li>
              <li className="footer__inner-item">
                <Link
                  className="footer__location"
                  target={"_blank"}
                  to={"https://goo.gl/maps/Ch9Ebbks4FVrYnFWA"}
                >
                  Москва, ул. Юных Ленинцев, д.99
                </Link>
              </li>
              <li className="footer__inner-item ">
                <div className="footer__social_media">
                  <Link target={"_blank"} to={"https://www.facebook.com/"}>
                    Facebok
                  </Link>
                  <Link target={"_blank"} to={"https://www.instagram.com/"}>
                    Instagram
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h3 className="footer__copyright">© Copyright 2023 — Куда Пицца</h3>
    </div>
  );
};

export default Footer;
