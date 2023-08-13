import { createContext, useReducer } from "react";
import reducer from "./reducers";
import { API_PARAMS, GET_PRODUCTS, SHOW_BASKET, SHOW_LOGIN } from "./actions";

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

  return (
    <DataContext.Provider
      value={{
        context: state,
        showBasket,
        showLogin,
        apiParams,
        getProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
