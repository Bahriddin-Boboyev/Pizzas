import React, { useEffect, useState } from "react";
import "./header.scss";
import { cart1 } from "../../helpers/cart-up";

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
              <img src={cart1} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
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
              <img src={cart1} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
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
              <img src={cart1} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
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
              <img src={cart1} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartUp;
