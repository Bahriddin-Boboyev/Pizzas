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
import { Link } from "react-router-dom";

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
          <Link to={"menu/fire"} className="cartUp__image-block">
            <div>
              <img src={cart1} alt="cart1" />
            </div>
            <h4>Акции</h4>
          </Link>
        </li>
        <li className="cartUp__item">
          <Link to={"menu/pizzas"} className="cartUp__image-block">
            <div>
              <img src={cart2} alt="cart1" />
            </div>
            <h4>Пицца</h4>
          </Link>
        </li>
        <li className="cartUp__item">
          <Link to={"menu/sushi"} className="cartUp__image-block">
            <div>
              <img src={cart3} alt="cart1" />
            </div>
            <h4>Суши</h4>
          </Link>
        </li>
        <li className="cartUp__item">
          <Link to={"menu/drink"} className="cartUp__image-block">
            <div>
              <img src={cart4} alt="cart1" />
            </div>
            <h4>Напитки</h4>
          </Link>
        </li>
        <li className="cartUp__item">
          <Link to={"menu/snacks"} className="cartUp__image-block">
            <div>
              <img src={cart5} alt="cart1" />
            </div>
            <h4>Закуски</h4>
          </Link>
        </li>
        <li className="cartUp__item">
          <Link to={"menu/combo"} className="cartUp__image-block">
            <div>
              <img src={cart6} alt="cart1" />
            </div>
            <h4>Комбо</h4>
          </Link>
        </li>
        <li className="cartUp__item">
          <Link to={"menu/desserts"} className="cartUp__image-block">
            <div>
              <img src={cart7} alt="cart1" />
            </div>
            <h4>Десерты</h4>
          </Link>
        </li>
        <li className="cartUp__item">
          <Link to={"menu/sauce"} className="cartUp__image-block">
            <div>
              <img src={cart8} alt="cart1" />
            </div>
            <h4>Соусы</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CartUp;
