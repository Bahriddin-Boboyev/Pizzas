import React from 'react';
import './footer.scss';
import { useNavigate } from 'react-router-dom';
import { Icons } from '@/img';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import { footerList } from './constants';

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
          {footerList.map((slack) => (
            <li className="footer__item" key={slack.id}>
              <ul className="footer__inner-list">
                <h2>{slack.name}</h2>
                {slack.items.map((i) => (
                  <li className="footer__inner-item" key={i.id}>
                    {i?.isSocials ? (
                      <div className="footer__social_media">
                        {i.lastItem.map((item) => (
                          <Link
                            to={item.link}
                            target={item.link !== '#' ? '_blank' : null}
                            className={`hover__text ${item.class}`}
                            key={item.id}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link to={i.link} target={i.link !== '#' ? '_blank' : null} className={`hover__text ${i.class}`}>
                        {i.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="footer__copyright container">© Copyright 2023 — Куда Пицца</h3>
    </div>
  );
};
