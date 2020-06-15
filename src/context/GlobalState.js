import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// * Initial State
const initialState = {
  symbols: [],
};

//  * Create Context
export const GlobalContext = createContext(initialState);

//  * Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // * Action
  function getSymbols() {
    dispatch({
      type: "GET_SYMBOLS",
      payload: "",
    });
  }

  function searchSymbols(symbol) {
      console.log(symbol, state);
      
    dispatch({
      type: 'SEARCH_SYMBOLS',
      payload: symbol,
    });
  }

  function deleteSymbols(id) {
    dispatch({
      type: "DELETE_SYMBOL",
      payload: id,
    });
  }
  function addSymbols(symbol) {
    dispatch({
      type: "ADD_SYMBOL",
      payload: symbol,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        symbols: state.symbols,
        getSymbols,
        searchSymbols,
        deleteSymbols,
        addSymbols,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
