import { SHOW_LOGIN, SHOW_BASKET, API_PARAMS, GET_PRODUCTS } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_BASKET:
      const basket = { ...state, basket: action.payload };
      return (state = basket);
    case SHOW_LOGIN:
      const login = { ...state, login: action.payload };
      return (state = login);
    case API_PARAMS:
      const param = { ...state, params: action.payload };
      return (state = param);
    case GET_PRODUCTS:
      const prod = { ...state, prod: action.payload };
      return (state = prod);
    default:
      return state;
  }
};

export default reducer;
