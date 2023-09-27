import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "./context/context";
import BasketRight from "./components/main/basket-right";
import useAxiosFunction from "./hooks/useAxiosFunction";
import useLocalStorageState from "use-local-storage-state";
import { NetworkErrorRoutes, ProtectedRoutes } from "./utils";
import { ToastCustomContainer } from "./components";
import {
  Combo,
  Desserts,
  Drink,
  Home,
  Pizzas,
  Sauce,
  Snacks,
  Sushi,
  Stock,
  Basket,
  Order,
  PageNotFound,
} from "./pages";

const App = () => {
  const { context, showBasket, getProducts } = useContext(DataContext);
  const [data, error, loading, axiosFetch] = useAxiosFunction();
  const [cart, setCart] = useLocalStorageState("cart", []);

  //
  const exists = context?.basket || context?.login?.hidden;
  useEffect(() => {
    if (exists) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible ";
    }
  }, [exists]);

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
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route index element={<Home />} />
            <Route path="menu/pizzas" element={<Pizzas />} />
            <Route path="menu/sushi" element={<Sushi />} />
            <Route path="menu/drink" element={<Drink />} />
            <Route path="menu/snacks" element={<Snacks />} />
            <Route path="menu/combo" element={<Combo />} />
            <Route path="menu/desserts" element={<Desserts />} />
            <Route path="menu/sauce" element={<Sauce />} />
            <Route path="menu/fire" element={<Stock />} />
            <Route path="basket" element={<Basket />} />
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/network-error" element={<NetworkErrorRoutes />} />
        </Routes>
      </div>
      <div
        onClick={() => showBasket(false)}
        className={`${exists ? "blur" : "none"}`}
      ></div>
      <BasketRight />
      <ToastCustomContainer />
    </div>
  );
};

export default App;
