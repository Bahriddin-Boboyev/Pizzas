import { useState, useEffect, useContext } from "react";
import "./main.scss";
import { Link } from "react-router-dom";
import {
  cartSlice,
  storeTotalCost,
  clickStoreProduct,
  storeItemsCount,
} from "../../helpers";
import { DataContext } from "../../context";
import { useAxiosFunction } from "../../hooks";

const BasketRight = () => {
  const { context, showBasket, getStoreItems } = useContext(DataContext);
  const [data, error, loading, axiosFetch] = useAxiosFunction();
  let prods = JSON.parse(localStorage.getItem("cart"));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const uniqueProducts = Array.from(
      new Set(prods?.map((prod) => prod._id)),
    ).map((id) => prods?.find((prod) => prod._id === id));
    setProducts(uniqueProducts);
    // eslint-disable-next-line
  }, [context]);

  return (
    <div className={`basket-right ${context?.basket ? "flex" : ""}`}>
      {error ? (
        <h2 className="error_msg basket__right--error">
          {JSON.stringify(error)}
        </h2>
      ) : (
        <>
          <div className="basket-right__box">
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
          <ul className="basket-right__content">
            {!prods?.length ? (
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
                storeItemsCount(prod._id, prods) > 0 ? (
                  <li className="basket-right__item" key={prod._id}>
                    <img src={prod.image} alt={prod.name} />
                    <div className="basket-right__info">
                      <h6>{cartSlice(prod.description, 20, 0, 20)}</h6>
                      <p>{cartSlice(prod.description, 25, 0, 25)}</p>
                      <div className="basket-right__btn-box">
                        <button
                          onClick={() =>
                            clickStoreProduct(
                              { item: prod, type: "decrement" },
                              prods,
                              getStoreItems,
                            )
                          }
                        >
                          -
                        </button>
                        <span className="basket-right__input">
                          {storeItemsCount(prod._id, prods)}
                        </span>
                        <button
                          onClick={() =>
                            clickStoreProduct(
                              { item: prod, type: "increment" },
                              prods,
                              getStoreItems,
                            )
                          }
                        >
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
          <div className="basket-right__footer">
            <span>Итого: {storeTotalCost(prods)} ₽</span>
            <Link
              className="on"
              to={"/basket"}
              onClick={() => showBasket(false)}
            >
              Оформить заказ
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketRight;
