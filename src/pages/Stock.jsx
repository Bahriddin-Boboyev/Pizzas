import useAxiosFunction from "../hooks/useAxiosFunction";
import { useScrollFixed } from "../helpers";
import { Loading } from "../components";

const Stock = () => {
  const [data, error, loading, axiosFetch] = useAxiosFunction();

  const fixed = useScrollFixed(60);

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
