import './style.scss';
import { Icons } from '@/img';
import { Helmet } from 'react-helmet-async';

export const Order = () => {
    return (
        <div className="order">
            <Helmet>
                <title>Куда пицца | Акции</title>
            </Helmet>

            <div className="order__box">
                <div className="order__img-box">
                    <img src={Icons.orderIcon} alt="order img" />
                </div>
                <h4>Заказ №310202 принят</h4>
                <p>Спасибо за заказ! Примерное время доставки 45 минут. Статус отследить можно нажав на кнопку ниже</p>
                <button className="btn">Отследить заказ</button>
            </div>
        </div>
    );
};
