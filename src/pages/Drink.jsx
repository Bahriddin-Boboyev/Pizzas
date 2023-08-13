import React, { useEffect, useState } from "react";
import useGetCategory from "../helpers/get-category";
import useScrollFixed from "../helpers/scroll-fixed";
import useAxiosFunction from "../hooks/useAxiosFunction";

const Drink = ({ setCategory, data }) => {
  const [dataAxios, error, loading, axiosFetch] = useAxiosFunction();
  const [product, setProduct] = useState([]);
  //
  useGetCategory(axiosFetch);
  useEffect(() => {
    if (!error && !loading && dataAxios?.data) {
      const result = dataAxios?.data.categories.find(
        (item) => item.name === "Напитки"
      );
      setCategory(result._id);
    }
    // eslint-disable-next-line
  }, [dataAxios, error, loading]);

  useEffect(() => {
    if (data?.data?.products) setProduct(data?.data?.products);
    // eslint-disable-next-line
  }, [data]);

  const fixed = useScrollFixed(60);

  return (
    <div className={`pizzas ${fixed ? "pizzas-fixed" : ""}`}>
      <h1>Напитки</h1>
      <ul className="pizzas__list">
        {product.map((prod) => (
          <li className="pizzas__item" key={prod._id}>
            <div className="pizzas__img-box">
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
            <div className="pizzas__down-block">
              <button>Выбрать</button>
              <span>от {prod.price} ₽</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drink;
