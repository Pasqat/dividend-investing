export default (state, action) => {
  switch (action.type) {
    case "GET_SYMBOLS":
      return {
        ...state,
        symbols: action.payload,
      };
    case "SEARCH_SYMBOLS":
      return {
        ...state,
        symbols: action.payload
      };
    case "ADD_SYMBOL":
      return {
        ...state,
        symbols: [...state.symbols, action.payload],
      };
    case "DELETE_SYMBOL":
      return {
        ...state,
        symbols: state.symbols.filter((symbol) => symbol.id !== action.payload),
      };
    default:
      return state;
  }
};
