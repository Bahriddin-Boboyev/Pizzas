import { createContext, useReducer } from "react";
import reducer from "./reducers";
import { SHOW_BASKET, HIDDEN_BASKET } from "./actions";

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
  const hiddenBasket = (basket) => {
    dispatch({
      type: HIDDEN_BASKET,
      payload: basket,
    });
  };

  return (
    <DataContext.Provider
      value={{
        context: state,
        showBasket,
        hiddenBasket,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
