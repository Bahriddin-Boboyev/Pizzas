import React from "react";
import "./header.scss";
import { cart1 } from "../../helpers/cart-up";

const CartUp = () => {
  return (
    <div className="cartUp">
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
