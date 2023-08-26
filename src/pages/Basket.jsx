import React, { useEffect, useState } from "react";
import "./index.scss";
import { cartSlice, clickStoreProduct, storeItemsCount } from "../helpers";

const Basket = ({ context, getStoreItems }) => {
  let prods = JSON.parse(localStorage.getItem("cart"));
  const [products, setProducts] = useState([]);

  // unique product
  useEffect(() => {
    const uniqueProducts = Array.from(
      new Set(prods?.map((prod) => prod._id)),
    ).map((id) => prods?.find((prod) => prod._id === id));
    setProducts(uniqueProducts);
    // eslint-disable-next-line
  }, [context]);

  return (
    <div className="container basket">
      <div className="basket__box">
        <h1 className="basket__title">Ваш заказ</h1>
        {!prods?.length ? (
          <div className="basket__not-fount--box">
            <div>
              <h1>Товар не найден!</h1>
            </div>
          </div>
        ) : (
          <ul className="basket__list">
            {products?.map((prod) =>
              storeItemsCount(prod._id, prods) > 0 ? (
                <li className="basket__item" key={prod._id}>
                  <div className="basket__img-desc--box">
                    <div className="basket__img--block">
                      <img src={prod.image} alt={prod.name} />
                    </div>
                    <div className="basket__description--block">
                      <h3>{cartSlice(prod.description, 40, 0, 40)}</h3>
                      <p>{cartSlice(prod.description, 30, 0, 30)}</p>
                    </div>
                  </div>
                  <div className="basket__button-price--box">
                    <div>
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
                      <span>{storeItemsCount(prod._id, prods)}</span>
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
                    <h4>{prod.price} ₽</h4>
                  </div>
                </li>
              ) : (
                ""
              ),
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Basket;
