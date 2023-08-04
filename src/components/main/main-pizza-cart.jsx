import React from "react";
import "./main.scss";
import cart1 from "../../img/main-pizza-cart-1.png";
import cart2 from "../../img/main-pizza-cart-2.png";
const MainPizzaCart = ({title}) => {
  return (
    <div className="mainPizza">
      <div className="mainPizza__top_box">
        <h2>{title}</h2>
        <button>Фильтры</button>
      </div>

      <ul className="mainPizza__list">
        <li className="mainPizza__item">
          <div className="mainPizza__img-box">
            <img src={cart1} alt="img" />
          </div>
          <h3>Чикен Сладкий Чили</h3>
          <p>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный...</p>
          <div className="mainPizza__down-block">
            <button>Выбрать</button>
            <span>от 399 ₽</span>
          </div>
        </li>
        <li className="mainPizza__item">
          <div className="mainPizza__img-box">
            <img src={cart2} alt="img" />
          </div>
          <h3>EASY PEASY огуречный расколбас</h3>
          <p>Курица, Лук, Перец Халапеньо...</p>
          <div className="mainPizza__down-block">
            <button>Выбрать</button>
            <span>от 549 ₽</span>
          </div>
        </li>
        <li className="mainPizza__item">
          <div className="mainPizza__img-box">
            <img src={cart1} alt="img" />
          </div>
          <h3>Чикен Сладкий Чили</h3>
          <p>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный...</p>
          <div className="mainPizza__down-block">
            <button>Выбрать</button>
            <span>от 399 ₽</span>
          </div>
        </li>
        <li className="mainPizza__item">
          <div className="mainPizza__img-box">
            <img src={cart2} alt="img" />
          </div>
          <h3>EASY PEASY огуречный расколбас</h3>
          <p>Курица, Лук, Перец Халапеньо...</p>
          <div className="mainPizza__down-block">
            <button>Выбрать</button>
            <span>от 549 ₽</span>
          </div>
        </li>
        <li className="mainPizza__item">
          <div className="mainPizza__img-box">
            <img src={cart1} alt="img" />
          </div>
          <h3>Чикен Сладкий Чили</h3>
          <p>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный...</p>
          <div className="mainPizza__down-block">
            <button>Выбрать</button>
            <span>от 399 ₽</span>
          </div>
        </li>
        <li className="mainPizza__item">
          <div className="mainPizza__img-box">
            <img src={cart2} alt="img" />
          </div>
          <h3>EASY PEASY огуречный расколбас</h3>
          <p>Курица, Лук, Перец Халапеньо...</p>
          <div className="mainPizza__down-block">
            <button>Выбрать</button>
            <span>от 549 ₽</span>
          </div>
        </li>
        <li className="mainPizza__item">
          <div className="mainPizza__img-box">
            <img src={cart1} alt="img" />
          </div>
          <h3>Чикен Сладкий Чили</h3>
          <p>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный...</p>
          <div className="mainPizza__down-block">
            <button>Выбрать</button>
            <span>от 399 ₽</span>
          </div>
        </li>
        <li className="mainPizza__item">
          <div className="mainPizza__img-box">
            <img src={cart2} alt="img" />
          </div>
          <h3>EASY PEASY огуречный расколбас</h3>
          <p>Курица, Лук, Перец Халапеньо...</p>
          <div className="mainPizza__down-block">
            <button>Выбрать</button>
            <span>от 549 ₽</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MainPizzaCart;
