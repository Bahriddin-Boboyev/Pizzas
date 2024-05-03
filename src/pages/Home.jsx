import { useState } from 'react';
import './index.scss';
import CartDown from '@/components/header/cart-down';
import CartUp from '@/components/header/cart-up';
import MainPizzaCart from '@/components/main/main-pizza-cart';

export const Home = () => {
  const [descShow, setDescShow] = useState(true);

  return (
    <div>
      <CartUp />
      <CartDown />
      <div className="home__search-box">
        <div>
          <label>Проверить адрес доставки</label>
          <input type="text" placeholder="Адрес" />
          <button>Проверить</button>
        </div>
      </div>

      <MainPizzaCart />

      <div className="home__dostavki">
        <h2>Доставка пиццы в Москве</h2>
        <div className={`home__dostavki-desc_box ${descShow ? 'overflowHidden' : ''}`}>
          <p className="home__dostavki-desc">
            Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до
            магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит
            супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный
            вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и
            классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в
            течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть. <br />
            <span>Как сделать заказ</span> Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить,
            ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу
            онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не
            уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s.
            И не забудьте оплатить заказ курьеру!
          </p>
          <div className={descShow ? 'overlay' : ''}></div>
        </div>
        <button onClick={() => setDescShow((prev) => (prev = !prev))} className="home__dostavki-btn">
          Показать полностью
        </button>
      </div>
    </div>
  );
};
