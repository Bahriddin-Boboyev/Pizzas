import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { cartSlice, useScrollFixed, useGetCategory } from "../helpers";

const Sushi = ({ setCategory, getStoreItems, data }) => {
  const [dataAxios, error, loading, axiosFetch] = useAxiosFunction();
  const [product, setProduct] = useState([]);
  //
  useGetCategory(axiosFetch);
  useEffect(() => {
    if (!error && !loading && dataAxios?.data) {
      const result = dataAxios?.data.categories.find(
        (item) => item.name === "Суши",
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
  const products = product.filter((item) => item.category.name === "Суши");

  return (
    <div className={`pizzas ${fixed ? "pizzas-fixed" : ""}`}>
      {error ? (
        <h2 className="error_msg">{JSON.stringify(error)}</h2>
      ) : (
        <>
          {loading ? (
            <div className="loading__visible">
              <ThreeDots
                height="150"
                width="150"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={loading}
              />
            </div>
          ) : (
            <>
              <h1>Комбо</h1>
              <ul className="pizzas__list">
                {products.map((prod) => (
                  <li className="pizzas__item" key={prod._id}>
                    <div className="pizzas__img-box">
                      <img src={prod.image} alt="img" />
                    </div>
                    <h3>{cartSlice(prod.name, 15, 0, 15)}</h3>
                    <p>{cartSlice(prod.description, 30, 0, 30)}</p>
                    <div className="pizzas__down-block">
                      <button onClick={() => getStoreItems(prod)}>
                        Выбрать
                      </button>
                      <span>от {prod.price} ₽</span>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Sushi;
