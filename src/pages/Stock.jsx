import React, { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { useScrollFixed, useGetCategory } from "../helpers";

const Stock = ({ setCategory }) => {
  const [dataAxios, error, loading, axiosFetch] = useAxiosFunction();
  //
  useGetCategory(axiosFetch);
  useEffect(() => {
    if (!error && !loading && dataAxios?.data) {
      const result = dataAxios?.data.categories.find(
        (item) => item.name === "Закуски",
      );
      setCategory(result._id);
    }
    // eslint-disable-next-line
  }, [dataAxios, error, loading]);
  //
  const fixed = useScrollFixed(60);

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
              <div className="open__soong">
                <h1>Cкоро выйдет...</h1>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Stock;
