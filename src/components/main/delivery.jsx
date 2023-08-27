import React from "react";

const Delivery = () => {
  return (
    <div className="container delivery">
      <div className="delivery__hero">
        <h3>Доставка</h3>
        <div>
          <input
            type="radio"
            id="delivery"
            name="delivery_type"
            value={"delivery"}
            checked
          />
          <label htmlFor="delivery">Доставка</label>
          <input
            type="radio"
            id="pickup"
            name="delivery_type"
            value={"pickup"}
          />
          <label htmlFor="pickup">Самовывоз</label>
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
                type="radio"
                id="soon"
                name="delivery-time"
                value={"soon"}
                checked
              />
              <label htmlFor="soon">Как можно скорее</label>
            </div>
            <div>
              <input
                type="radio"
                id="byTime"
                name="delivery-time"
                value={"byTime"}
              />
              <label htmlFor="byTime">По времени</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
