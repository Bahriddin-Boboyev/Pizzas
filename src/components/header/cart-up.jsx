import React, { useEffect, useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { cardUpList } from './constants';

const CartUp = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });

  return (
    <div className={`cartUp ${fixed ? 'cartUpFixed' : ''}`}>
      <ul className="cartUp__list" id="style-2">
        {cardUpList.map((item) => (
          <li className="cartUp__item" key={item.id}>
            <Link to={item.link} className="cartUp__image-block">
              <div>
                <img src={item.img} alt="cart1" />
              </div>
              <h4>{item.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartUp;
