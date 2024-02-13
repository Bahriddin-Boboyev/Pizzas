import React from 'react';
import './footer.scss';
import { useNavigate } from 'react-router-dom';
import { Icons } from '@/img';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer__box container">
        <div className="footer__box-logo" onClick={() => navigate('/')}>
          <ReactSVG src={Icons.logoText} />
          <ReactSVG src={Icons.logo} />
        </div>
        <ul className="footer__list">
          <li className="footer__item">
            <h2>Куда пицца</h2>
            <ul className="footer__inner-list">
              <li className="footer__inner-item">
                <Link to={'#'} className="hover__text">
                  О компании
                </Link>
              </li>
              <li className="footer__inner-item">
                <Link to={'#'} className="hover__text">
                  Пользовательское соглашение
                </Link>
              </li>
              <li className="footer__inner-item">
                <Link to={'#'} className="hover__text">
                  Условия гарантии
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer__item">
            <h2>Помощь</h2>
            <ul className="footer__inner-list">
              <li className="footer__inner-item">
                <Link to={'#'} className="hover__text">
                  Ресторан
                </Link>
              </li>
              <li className="footer__inner-item">
                <Link to={'#'} className="hover__text">
                  Контакты
                </Link>
              </li>
              <li className="footer__inner-item">
                <Link to={'#'} className="hover__text">
                  Поддержка
                </Link>
              </li>
              <li className="footer__inner-item">
                <Link to={'#'} className="hover__text">
                  Отследить заказ
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer__item">
            <h2>Контакты</h2>
            <ul className="footer__inner-list">
              <li className="footer__inner-item">
                <Link className="footer__phone hover__text" to={'tel:+79262231011'}>
                  +7 (926) 223-10-11
                </Link>
              </li>
              <li className="footer__inner-item">
                <Link
                  className="footer__location hover__text"
                  target={'_blank'}
                  to={'https://goo.gl/maps/Ch9Ebbks4FVrYnFWA'}
                >
                  Москва, ул. Юных Ленинцев, д.99
                </Link>
              </li>
              <li className="footer__inner-item ">
                <div className="footer__social_media">
                  <Link className="hover__text" target={'_blank'} to={'https://www.facebook.com/'}>
                    Facebok
                  </Link>
                  <Link className="hover__text" target={'_blank'} to={'https://www.instagram.com/'}>
                    Instagram
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h3 className="footer__copyright container">© Copyright 2023 — Куда Пицца</h3>
    </div>
  );
};
