import React, { useEffect } from "react";
import "./main.scss";
import axios from "../../apis/api";
import useAxiosFunction from "../../hooks/useAxiosFunction";

const MainPizzaCart = ({ title }) => {
  const [data, error, loading, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios({ page: { limit: 100, offset: 0 } }),
      method: "GET",
      url: "/product",
      requestConfig: {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZmQxNTcyMWZiNmFmZDk0OWY2NzI3IiwiYWRtaW4iOnRydWV9LCJpYXQiOjE2OTE1MDE2MTIsImV4cCI6MTY5MTU4ODAxMn0.X2RsUeAkbIc1ug0N3ZXMU8eDC9DAxt6HMtkc_fBHtc4",
        },
      },
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const products = data.data?.products;

  return (
    <div className="mainPizza">
      {error ? (
        <p>{error.toString()}</p>
      ) : (
        <>
          {loading || !products ? <p>Loading....</p> : ""}
          <div className="mainPizza__top_box">
            <h2>{title}</h2>
            <button>Фильтры</button>
          </div>

          <ul className="mainPizza__list">
            {products?.map((prod) => (
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
