import { createContext, useReducer } from "react";
import reducer from "./reducers";
import { SHOW_BASKET, SHOW_LOGIN } from "./actions";

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

  return (
    <DataContext.Provider
      value={{
        context: state,
        showBasket,
        showLogin,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
