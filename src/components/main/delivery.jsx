import React from "react";
import Comment from "./comment";
import Lease from "./lease";
import Payment from "./payment";

const Delivery = ({ value, change }) => {
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
              onChange={change}
            />
            <label htmlFor="delivery">Доставка</label>
          </div>
          <div>
            <input
              type="radio"
              id="pickup"
              name="delivery_type"
              value="pickup"
              onChange={change}
            />
            <label htmlFor="pickup">Самовывоз</label>
          </div>
        </div>
      </div>
      <div className="delivery__box">
        <label htmlFor="ulitsa">Улица*</label>
        <input
          type="text"
          className="delivery__input delivery__input--home"
          placeholder="Пушкина"
          id="ulitsa"
          name="ulitsa"
          value={value.ulitsa}
          required
          autoComplete="off"
          onChange={change}
        />
        <div className="delivery__home-box">
          <div>
            <label htmlFor="home">Дом</label>
            <input
              className="delivery__input"
              type="text"
              id="home"
              name="home"
              value={value.home}
              placeholder="1а"
              autoComplete="off"
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="podez">Подъезд</label>
            <input
              className="delivery__input"
              type="text"
              id="podez"
              name="podez"
              value={value.podez}
              placeholder="1"
              autoComplete="off"
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="etaj">Этаж</label>
            <input
              className="delivery__input"
              type="text"
              id="etaj"
              name="etaj"
              value={value.etaj}
              placeholder="2"
              autoComplete="off"
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="kvartira">Квартира</label>
            <input
              className="delivery__input"
              type="text"
              id="kvartira"
              name="kvartira"
              value={value.kvartira}
              placeholder="3"
              autoComplete="off"
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="domafon">Домофон</label>
            <input
              className="delivery__input"
              type="text"
              id="domafon"
              name="domafon"
              value={value.domafon}
              placeholder="0000"
              autoComplete="off"
              onChange={change}
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
                name="delivery_time"
                value="soon"
                defaultChecked
                onChange={change}
              />
              <label htmlFor="soon">Как можно скорее</label>
            </div>
            <div>
              <input
                className="input__custom"
                type="radio"
                id="byTime"
                name="delivery_time"
                value="byTime"
                onChange={change}
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
      </div>
    </div>
  );
};

export default Delivery;
