import React, { useEffect, useState } from "react";
import "./header.scss";
import {
  cart1,
  cart2,
  cart3,
  cart4,
  cart5,
  cart6,
  cart7,
  cart8,
} from "../../helpers/cart-up";

const CartUp = () => {
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
    <div className={`cartUp ${fixed ? "cartUpFixed" : ""}`}>
      <ul className="cartUp__list">
        <li className="cartUp__item">
          <div className="cartUp__image-block">
            <div>
              <img src={cart1} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
        <li className="cartUp__item">
          <div className="cartUp__image-block">
            <div>
              <img src={cart2} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
        <li className="cartUp__item">
          <div className="cartUp__image-block">
            <div>
              <img src={cart3} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
        <li className="cartUp__item">
          <div className="cartUp__image-block">
            <div>
              <img src={cart4} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
        <li className="cartUp__item">
          <div className="cartUp__image-block">
            <div>
              <img src={cart5} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
        <li className="cartUp__item">
          <div className="cartUp__image-block">
            <div>
              <img src={cart6} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
        <li className="cartUp__item">
          <div className="cartUp__image-block">
            <div>
              <img src={cart7} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
        <li className="cartUp__item">
          <div className="cartUp__image-block">
            <div>
              <img src={cart8} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartUp;
