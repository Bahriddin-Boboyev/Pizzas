import React from "react";

const Basket = ({ basket, showBasket }) => {
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
        <li className="basket__item">
          <img
            src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg"
            alt="Pizza"
          />
          <div className="basket__info">
            <h6>Цыпленок барбекю</h6>
            <p>Традиционное тесто, 23 см</p>
            <div style={{ flex: "1 1 0%" }}></div>
            <div className="basket__btn-box">
              <button>-</button>
              <span className="basket__input">1</span>
              <button>+</button>
            </div>
            <span>295 ₽</span>
          </div>
        </li>
      </ul>
      <div className="basket__footer">
        <span>Итого: 0 ₽</span>
        <button className="on">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Basket;
