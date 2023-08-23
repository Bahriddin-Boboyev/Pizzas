import { createContext, useReducer } from "react";
import reducer from "./reducers";
import {
  API_PARAMS,
  GET_PRODUCTS,
  GET_STORE_ITEM,
  SHOW_BASKET,
  SHOW_LOGIN,
} from "./actions";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);

  const showBasket = (basket) => {
    dispatch({
      type: SHOW_BASKET,
      payload: basket,
    });
  };
  const showLogin = (login) => {
    dispatch({
      type: SHOW_LOGIN,
      payload: login,
    });
  };
  const apiParams = (params) => {
    dispatch({
      type: API_PARAMS,
      payload: params,
    });
  };

  const getProducts = (product) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: product,
    });
  };
  const getStoreItems = (product) => {
    dispatch({
      type: GET_STORE_ITEM,
      payload: product,
    });
  };

  return (
    <DataContext.Provider
      value={{
        context: state,
        showBasket,
        showLogin,
        apiParams,
        getProducts,
        getStoreItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
