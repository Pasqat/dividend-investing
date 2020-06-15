import React, { useContext } from "react";
import {StockItem} from '../stock-item/stock-item.component';

import {StockList} from './stock-list.styles';

import { GlobalContext } from "../../context/GlobalState";

export const StocksList = () => {
  const { symbols } = useContext(GlobalContext);

  return (
    <>
      {symbols.map((stock) => (
        <StockItem key={stock.id} stock={stock} />
      ))}
    </>
  );
};
