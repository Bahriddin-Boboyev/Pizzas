import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../../context";
import EmptyBasketIcon from "../../ui/empty-basket-icon";
import "./main.scss";

const Basket = ({ basket, showBasket }) => {
  const prods = JSON.parse(localStorage.getItem("cart"));
  const { context } = useContext(DataContext);
  const [products, setProducts] = useState(prods ? [...prods] : []);

  useEffect(() => {
    if (context?.store) {
      setProducts(context.store);
    }
  }, [context]);

  return (
    <div className={`basket ${basket ? "flex" : ""}`}>
      <div className="basket__box">
        <h3>Ваш заказ</h3>
        <svg
          onClick={() => showBasket(false)}
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url('6bfd12d8773c5ea5')">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.332.229A.78.78 0 0 0 .23 1.332L10.896 12 .23 22.668a.78.78 0 1 0 1.103 1.103L12 13.104 22.668 23.77a.78.78 0 1 0 1.103-1.103L13.104 12 23.77 1.332A.78.78 0 1 0 22.668.23L12 10.896 1.332.23Z"
              fill="#A5A5A5"
            ></path>
          </g>
        </svg>
      </div>
      <ul className="basket__content">
        {!products.length ? (
          <lottie-player
            class="anime_father"
            src="https://lottie.host/19d8ab04-73aa-4591-b3ce-5452e0e9f640/9lJD396bxj.json"
            background="transparent"
            speed="1"
            style={{
              marginTop: "50%",
              width: "100%",

              /*             width: "300px",
              height: "300px", */
            }}
            loop
            autoplay
          ></lottie-player>
        ) : (
          products?.map((prod) => (
            <li className="basket__item" key={prod._id}>
              <img src={prod.image} alt={prod.name} />
              <div className="basket__info">
                <h6>
                  {prod.name.length > 15
                    ? `${prod.name.slice(0, 15)}...`
                    : prod.name}
                </h6>
                <p>
                  {prod.description.length > 15
                    ? `${prod.description.slice(0, 20)}...`
                    : prod.description}
                </p>
                <div className="basket__btn-box">
                  <button>-</button>
                  <span className="basket__input">1</span>
                  <button>+</button>
                </div>
                <span>{prod.price} ₽</span>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="basket__footer">
        <span>Итого: 0 ₽</span>
        <button className="on">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Basket;
