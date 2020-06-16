export default (state, action) => {
  switch (action.type) {
    case "GET_SYMBOLS":
      return {
        ...state,
        symbols: action.payload,
        isLoading: false
      };

    case "ADD_SYMBOL":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload.symbol],
        isLoading: true
      };
    case "DELETE_SYMBOL":
      return {
        ...state,
        symbols: state.symbols.filter(symbol => symbol.symbol !== action.payload),
      };
    default:
      return state;
  }
};
