import React, { useContext, useEffect, useState } from "react";
import "./main.scss";
/* import axios from "../../apis/api";
import useAxiosFunction from "../../hooks/useAxiosFunction"; */
import { DataContext } from "../../context";

const MainPizzaCart = ({ title }) => {
  const { context } = useContext(DataContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (context?.prod) {
      setProducts({ ...context.prod });
    }
  }, [context]);

  return (
    <div className="mainPizza">
      {products?.error ? (
        <p>{products?.error.toString()}</p>
      ) : (
        <>
          {products?.loading || !products ? <p>Loading....</p> : ""}
          <div className="mainPizza__top_box">
            <h2>{title}</h2>
            <button>Фильтры</button>
          </div>

          <ul className="mainPizza__list">
            {products.prod?.map((prod) => (
              <li key={prod._id} className="mainPizza__item">
                <div className="mainPizza__img-box">
                  <img src={prod.image} alt="img" />
                </div>
                <h3>
                  {prod.name.length > 15
                    ? `${prod.name.slice(0, 15)}...`
                    : prod.name}
                </h3>
                <p>
                  {prod.description.length > 15
                    ? `${prod.description.slice(0, 30)}...`
                    : prod.description}
                </p>
                <div className="mainPizza__down-block">
                  <button>Выбрать</button>
                  <span>от {prod.price} ₽</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MainPizzaCart;
