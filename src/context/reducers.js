import { HIDDEN_BASKET, SHOW_BASKET } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_BASKET:
      const at = { basket: action.payload };
      return (state = at);
    case HIDDEN_BASKET:
      return {};
    default:
      return state;
  }
};

export default reducer;
