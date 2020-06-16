import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// * Nomrlaizing data

const StockDataNorm = (pisello) =>
  Object.keys(pisello).map((key) => pisello[key]);

// * Initial State
const initialState = {
  symbols: [],
  watchlist: ["aapl"],
  isLoading: true
};

//  * Create Context
export const GlobalContext = createContext(initialState);

//  * Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // * Action
  async function getSymbols() {
    const config = {
      headers: {
        Content_type: "application/json",
      },
    };

    const reqWatchlist = { watchlist: state.watchlist };

    try {
      const res = await axios.post(
        "http://localhost:5000/list",
        reqWatchlist,
        config
      );

      dispatch({
        type: "GET_SYMBOLS",
        payload: StockDataNorm(res.data),
      });
    } catch (err) {
      console.log(err);
      // TODO gestione dell'errore se inserisco un simbolo inesistente, se il server è down ecc
    }
  }

  //   function searchSymbols(symbol) {
  //       console.log(symbol, state);

  //     dispatch({
  //       type: 'SEARCH_SYMBOLS',
  //       payload: symbol,
  //     });
  //   }

  function deleteSymbols(symbol) {
    dispatch({
      type: "DELETE_SYMBOL",
      payload: symbol,
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
        watchlist: state.watchlist,
        isLoading: state.isLoading,
        getSymbols,
        // getSymbols,
        // searchSymbols,
        deleteSymbols,
        addSymbols,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
