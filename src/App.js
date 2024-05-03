import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DataContext } from './context/context';
import BasketRight from './components/main/basket-right';
import { useAxiosFunction } from './hooks';
import useLocalStorageState from 'use-local-storage-state';
import { NetworkErrorRoutes, ProtectedRoutes, SomethingWrong } from './utils';
import { Loading, ToastCustomContainer } from './components';
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
  MyAccountSettings,
} from './pages';

const App = () => {
  const { context, showBasket, getProducts } = useContext(DataContext);
  const [data, error, loading] = useAxiosFunction();
  const [_, setCart] = useLocalStorageState('cart', []);

  //
  const exists = context?.basket || context?.modal?.hidden;
  const globalLoading = context?.types?.loading;
  useEffect(() => {
    if (exists || globalLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible ';
    }
  }, [exists, globalLoading]);

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
            <Route path="settings" element={<MyAccountSettings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/network-error" element={<NetworkErrorRoutes />} />
          <Route path="/error" element={<SomethingWrong />} />
        </Routes>
      </div>
      <div onClick={() => showBasket(false)} className={`${exists || globalLoading ? 'blur-bg' : 'none'}`}></div>
      {globalLoading && <Loading visible={true} global={true} />}
      <BasketRight />
      <ToastCustomContainer />
    </div>
  );
};

export default App;
