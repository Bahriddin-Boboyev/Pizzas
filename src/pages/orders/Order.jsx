import "./style.scss";
import orderImg from "../../img/order.svg";

export const Order = () => {
  return (
    <div className="order">
      <div className="order__box">
        <div className="order__img-box">
          <img src={orderImg} alt="order img" />
        </div>
        <h4>Заказ №310202 принят</h4>
        <p>
          Спасибо за заказ! Примерное время доставки 45 минут. Статус отследить
          можно нажав на кнопку ниже
        </p>
        <button className="btn">Отследить заказ</button>
      </div>
    </div>
  );
};
