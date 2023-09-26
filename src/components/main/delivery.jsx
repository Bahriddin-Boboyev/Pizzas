import React from "react";
import { storeTotalCost } from "../../helpers";
import Comment from "./comment";
import Lease from "./lease";
import Payment from "./payment";

const Delivery = () => {
  const prods = storeTotalCost(JSON.parse(localStorage.getItem("cart")));

  return (
    <div className="delivery">
      <div className="delivery__hero">
        <h3>Доставка</h3>
        <div className="delivery__hero--box">
          <div>
            <input
              type="radio"
              id="delivery"
              name="delivery_type"
              value="delivery"
              defaultChecked
            />
            <label htmlFor="delivery">Доставка</label>
          </div>
          <div>
            <input
              type="radio"
              id="pickup"
              name="delivery_type"
              value="pickup"
            />
            <label htmlFor="pickup">Самовывоз</label>
          </div>
        </div>
      </div>
      <div className="delivery__box">
        <label htmlFor="home">Улица*</label>
        <input
          type="text"
          className="delivery__input delivery__input--home"
          placeholder="Пушкина"
          id="home"
        />
        <div className="delivery__home-box">
          <div>
            <label htmlFor="dom">Дом</label>
            <input
              className="delivery__input"
              type="text"
              id="dom"
              placeholder="1а"
            />
          </div>
          <div>
            <label htmlFor="dom">Подъезд</label>
            <input
              className="delivery__input"
              type="text"
              id="dom"
              placeholder="1"
            />
          </div>
          <div>
            <label htmlFor="dom">Этаж</label>
            <input
              className="delivery__input"
              type="text"
              id="dom"
              placeholder="2"
            />
          </div>
          <div>
            <label htmlFor="dom">Квартира</label>
            <input
              className="delivery__input"
              type="text"
              id="dom"
              placeholder="3"
            />
          </div>
          <div>
            <label htmlFor="dom">Домофон</label>
            <input
              className="delivery__input"
              type="text"
              id="dom"
              placeholder="0000"
            />
          </div>
        </div>
        <div className="delivery__order-box">
          <h4>Когда выполнить заказ?</h4>
          <div className="delivery__order-time-box">
            <div>
              <input
                className="input__custom"
                type="radio"
                id="soon"
                name="delivery-time"
                value="soon"
                defaultChecked
              />
              <label htmlFor="soon">Как можно скорее</label>
            </div>
            <div>
              <input
                className="input__custom"
                type="radio"
                id="byTime"
                name="delivery-time"
                value="byTime"
              />
              <label htmlFor="byTime">По времени</label>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <Payment />
        <div className="line"></div>
        <Lease />
        <div className="line"></div>
        <Comment />
        <div className="line"></div>

        <div className="delivery__checkout">
          <h3>Итого: {prods} ₽</h3>
          <button className="btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
