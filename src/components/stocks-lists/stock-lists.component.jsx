import React, { useContext, useEffect } from "react";
import { StockItem } from "../stock-item/stock-item.component";

import { StockList } from "./stock-list.styles";

import { GlobalContext } from "../../context/GlobalState";

export const StocksList = () => {
  const { symbols,getSymbols,watchlist } = useContext(GlobalContext);
  // getSymbols();

  useEffect(()=> {
    getSymbols();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchlist]);

  return (
    <StockList>
      {symbols.map((stock) => (
        <StockItem key={stock.symbol} stock={stock} />
      ))}
    </StockList>
  );
};
