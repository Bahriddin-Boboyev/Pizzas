import React, { useEffect, useState } from "react";
import img from "../img/up-cart-1.svg";
import "./index.scss";

const Basket = ({ context, getStoreItems }) => {
  let prods = JSON.parse(localStorage.getItem("cart"));
  const [products, setProducts] = useState([]);

  // unique product
  useEffect(() => {
    const uniqueProducts = Array.from(
      new Set(prods?.map((prod) => prod._id)),
    ).map((id) => prods?.find((prod) => prod._id === id));
    setProducts(uniqueProducts);
    // eslint-disable-next-line
  }, [context]);

  return (
    <div className="container basket">
      <div className="basket__box">
        <h1 className="basket__title">Ваш заказ</h1>

        <ul className="basket__list">
          <li className="basket__item">
            <div className="basket__img-desc--box">
              <div className="basket__img--block">
                <img src={img} alt="img" />
              </div>
              <div className="basket__description--block">
                <h3>Пепперони по-деревенски</h3>
                <p>Традиционное тесто, 23 см</p>
              </div>
            </div>
            <div className="basket__button-price--box">
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <h4>399 ₽</h4>
            </div>
          </li>
          <li className="basket__item">
            <div className="basket__img-desc--box">
              <div className="basket__img--block">
                <img src={img} alt="img" />
              </div>
              <div className="basket__description--block">
                <h3>Пепперони по-деревенски</h3>
                <p>Традиционное тесто, 23 см</p>
              </div>
            </div>
            <div className="basket__button-price--box">
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <h4>399 ₽</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Basket;
