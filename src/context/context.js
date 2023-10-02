import { createContext, useReducer } from "react";
import reducer from "./reducers";
import {
  API_PARAMS,
  GET_PRODUCTS,
  GET_STORE_ITEM,
  GET_TYPES,
  SHOW_BASKET,
  SHOW_MODAL,
  SUBMIT_INPUTS_VALUES,
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
  const showModal = ({ hidden, type }) => {
    dispatch({
      type: SHOW_MODAL,
      payload: { hidden, type },
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
  const getStoreItems = (product, second) => {
    dispatch({
      type: GET_STORE_ITEM,
      payload: second ? { product, second } : product,
    });
  };

  const getSubmitInputValues = (payload) => {
    dispatch({
      type: SUBMIT_INPUTS_VALUES,
      payload,
    });
  };

  const getSendTypes = (payload) => {
    dispatch({
      type: GET_TYPES,
      payload,
    });
  };

  return (
    <DataContext.Provider
      value={{
        context: state,
        showBasket,
        showModal,
        apiParams,
        getProducts,
        getStoreItems,
        getSubmitInputValues,
        getSendTypes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
