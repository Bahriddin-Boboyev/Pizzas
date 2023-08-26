import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/header/Navbar";
import { DataContext } from "./context/context";
import BasketRight from "./components/main/basket-right";
import {
  Combo,
  Desserts,
  Drink,
  Home,
  Pizzas,
  Sauce,
  Snacks,
  Sushi,
  Basket,
} from "./pages";
import axios from "./apis/api";
import useAxiosFunction from "./hooks/useAxiosFunction";
import useLocalStorageState from "use-local-storage-state";

const App = () => {
  const { context, showBasket, getProducts, getStoreItems } =
    useContext(DataContext);
  const [data, error, loading, axiosFetch] = useAxiosFunction();
  const [category, setCategory] = useState("all");
  // store
  const [cart, setCart, { removeItem }] = useLocalStorageState("cart", []);

  //
  const exists = context.basket || context.login;
  useEffect(() => {
    if (exists) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible ";
    }
  }, [exists]);

  ///
  const getData = () => {
    axiosFetch({
      axiosInstance: axios({
        page: { limit: 100, offset: 0 },
        filters: { category },
      }),
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
  }, [category]);

  useEffect(() => {
    getProducts({
      prod: data.data?.products ? data.data.products : [],
      error,
      loading,
    });
    // eslint-disable-next-line
  }, [data, error, loading]);

  useEffect(() => {
    if (context?.store) {
      setCart(context.store);
    }
    // eslint-disable-next-line
  }, [context]);

  return (
    <div className="App">
      <div className="container">
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setCategory={setCategory}
                data={data}
                getStoreItems={getStoreItems}
                key={"home"}
              />
            }
          />
          <Route
            path="/menu/pizzas"
            element={
              <Pizzas
                setCategory={setCategory}
                data={data}
                getStoreItems={getStoreItems}
                key={"pizzas"}
              />
            }
          />
          <Route
            path="/menu/sushi"
            element={
              <Sushi
                setCategory={setCategory}
                data={data}
                getStoreItems={getStoreItems}
                key={"sushi"}
              />
            }
          />
          <Route
            path="/menu/drink"
            element={
              <Drink
                setCategory={setCategory}
                data={data}
                getStoreItems={getStoreItems}
                key={"drink"}
              />
            }
          />
          <Route
            path="/menu/snacks"
            element={
              <Snacks
                setCategory={setCategory}
                data={data}
                getStoreItems={getStoreItems}
                key={"snacks"}
              />
            }
          />
          <Route
            path="/menu/combo"
            element={
              <Combo
                setCategory={setCategory}
                data={data}
                getStoreItems={getStoreItems}
                key={"combo"}
              />
            }
          />
          <Route
            path="/menu/desserts"
            element={
              <Desserts
                setCategory={setCategory}
                data={data}
                key={"desserts"}
              />
            }
          />
          <Route
            path="/menu/sauce"
            element={
              <Sauce
                setCategory={setCategory}
                data={data}
                getStoreItems={getStoreItems}
                key={"sauce"}
              />
            }
          />
          <Route
            path="/basket"
            element={
              <Basket
                context={context}
                setCategory={setCategory}
                data={data}
                getStoreItems={getStoreItems}
                key={"basket"}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
      <div
        onClick={() => showBasket(false)}
        className={`${exists ? "blur" : "none"}`}
      ></div>
      <BasketRight
        context={context}
        basket={context.basket}
        showBasket={showBasket}
        getStoreItems={getStoreItems}
        setCart={setCart}
        removeItem={removeItem}
      />
    </div>
  );
};

export default App;
