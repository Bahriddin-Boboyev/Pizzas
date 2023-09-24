import { useEffect, useState, useContext } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { useScrollFixed } from "../helpers";
import { getCategory, getProducts } from "../hooks";
import { DataContext } from "../context";
import { Items, Loading } from "../components";

const Pizzas = () => {
  const [data, error, loading, axiosFetch] = useAxiosFunction();
  const [data2, error2, loading2, axiosFetch2] = useAxiosFunction();
  const { getStoreItems } = useContext(DataContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategory(axiosFetch2);
  }, []);

  useEffect(() => {
    if (!error2 && !loading && data2?.data) {
      const result = data2?.data.categories.find(
        (item) => item.name === "Пицца",
      );
      getProducts(axiosFetch, result._id);
    }
    // eslint-disable-next-line
  }, [data2, error2, loading2]);

  useEffect(() => {
    if (data?.data?.products) {
      setProducts(data?.data?.products);
    }
  }, [data]);
  const fixed = useScrollFixed(50);

  return (
    <div className={`pizzas ${fixed ? "pizzas-fixed" : ""}`}>
      {error ? (
        <h2 className="error_msg">{JSON.stringify(error)}</h2>
      ) : (
        <>
          {loading ? (
            <Loading visible={true} />
          ) : (
            <>
              <Items
                getStoreItems={getStoreItems}
                products={products}
                title="Пицца"
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Pizzas;
