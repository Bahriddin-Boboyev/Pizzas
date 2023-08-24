import {
  SHOW_LOGIN,
  SHOW_BASKET,
  API_PARAMS,
  GET_PRODUCTS,
  GET_STORE_ITEM,
} from "./actions";

const reducer = (state, action) => {
  const items = localStorage.getItem("cart");
  switch (action.type) {
    case SHOW_BASKET:
      return (state = { ...state, basket: action.payload });
    case SHOW_LOGIN:
      return (state = { ...state, login: action.payload });
    case API_PARAMS:
      return (state = { ...state, params: action.payload });
    case GET_PRODUCTS:
      return (state = { ...state, prod: action.payload });
    case GET_STORE_ITEM:
      if (state?.store) {
        return (state = { ...state, store: [...state?.store, action.payload] });
      } else if (JSON.parse(items)?.length) {
        return (state = {
          ...state,
          store: [...JSON.parse(items), action.payload],
        });
      }
      return (state = { ...state, store: [action.payload] });
    default:
      return state;
  }
};

export default reducer;
