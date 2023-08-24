import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import useGetCategory from "../helpers/get-category";
import useScrollFixed from "../helpers/scroll-fixed";
import useAxiosFunction from "../hooks/useAxiosFunction";

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
                    <button onClick={() => getStoreItems(prod)}>Выбрать</button>
                    <span>от {prod.price} ₽</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    </div>
  );
};

export default Sushi;
