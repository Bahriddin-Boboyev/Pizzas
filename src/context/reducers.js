import {
  SHOW_LOGIN,
  SHOW_BASKET,
  API_PARAMS,
  GET_PRODUCTS,
  GET_STORE_ITEM,
  SUBMIT_INPUTS_VALUES,
} from "./actions";

const items = localStorage.getItem("cart");
const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_BASKET:
      return { ...state, basket: action.payload };
    case SHOW_LOGIN:
      return { ...state, login: action.payload };
    case API_PARAMS:
      return { ...state, params: action.payload };
    case GET_PRODUCTS:
      return { ...state, prod: action.payload };
    case GET_STORE_ITEM:
      if (action?.payload?.second) {
        return { ...state, store: action.payload.second };
      } else if (state?.store) {
        return { ...state, store: [...state?.store, action.payload] };
      } else if (JSON.parse(items)?.length) {
        return {
          ...state,
          store: [...JSON.parse(items), action.payload],
        };
      }
      return { ...state, store: [action.payload] };
    case SUBMIT_INPUTS_VALUES:
      return {
        ...state,
        values: {
          pay: "nalichi",
          lease: "bezlease",
          ...state.values,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
