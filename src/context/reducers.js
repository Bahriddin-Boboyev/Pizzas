import { SHOW_LOGIN, SHOW_BASKET, API_PARAMS } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_BASKET:
      const basket = { basket: action.payload };
      return (state = basket);
    case SHOW_LOGIN:
      const login = { login: action.payload };
      return (state = login);
    case API_PARAMS:
      const param = { params: action.payload };
      return (state = param);
    default:
      return state;
  }
};

export default reducer;
