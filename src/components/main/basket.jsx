import React, { useState, useEffect, useContext } from "react";
import "./main.scss";
import { DataContext } from "../../context";
import { cartSlice } from "../../helpers/cart-length-slice";

const Basket = ({ basket, showBasket, getStoreItems }) => {
  let prods = JSON.parse(localStorage.getItem("cart"));
  const { context } = useContext(DataContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const uniqueProducts = Array.from(
      new Set(prods?.map((prod) => prod._id)),
    ).map((id) => prods?.find((prod) => prod._id === id));
    setProducts(uniqueProducts);
    // eslint-disable-next-line
  }, [context]);

  //
  const storeTotalCost = (cart) => {
    if (!cart?.length) {
      return 0;
    }
    return prods.reduce((total, item) => (total += item.price), 0);
  };

  // click function
  const clickProductFunc = async (item, type) => {
    let newProds = [...prods];
    if (type === "increment") {
      getStoreItems(item);
    } else if (type === "decrement") {
      const prodToDecrement = newProds.find((prod) => prod._id === item._id);
      if (prodToDecrement) {
        const index = newProds.indexOf(prodToDecrement);
        newProds.splice(index, 1);
        getStoreItems(item._id, newProds);
      }
    }
  };

  //
  const itemsCount = (id) => {
    const count = prods?.filter((item) => item._id === id).length;
    return count;
  };

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
        {!prods.length ? (
          <lottie-player
            class="anime_father"
            src="https://lottie.host/19d8ab04-73aa-4591-b3ce-5452e0e9f640/9lJD396bxj.json"
            background="transparent"
            speed="1"
            style={{
              marginTop: "50%",
              width: "100%",
            }}
            loop
            autoplay
          ></lottie-player>
        ) : (
          products?.map((prod) =>
            itemsCount(prod._id) > 0 ? (
              <li className="basket__item" key={prod._id}>
                <img src={prod.image} alt={prod.name} />
                <div className="basket__info">
                  <h6>{cartSlice(prod.description, 20, 0, 20)}</h6>
                  <p>{cartSlice(prod.description, 25, 0, 25)}</p>
                  <div className="basket__btn-box">
                    <button onClick={() => clickProductFunc(prod, "decrement")}>
                      -
                    </button>
                    <span className="basket__input">
                      {itemsCount(prod._id)}
                    </span>
                    <button onClick={() => clickProductFunc(prod, "increment")}>
                      +
                    </button>
                  </div>
                  <span>{prod.price} ₽</span>
                </div>
              </li>
            ) : (
              ""
            ),
          )
        )}
      </ul>
      <div className="basket__footer">
        <span>Итого: {storeTotalCost(prods)} ₽</span>
        <button className="on">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Basket;
