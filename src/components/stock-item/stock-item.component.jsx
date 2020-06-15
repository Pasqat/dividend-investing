import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import {
  StockItemContainer,
  StockItemStyle,
  DeleteButton,
  StockNumberStyle,
  StockPriceStyle,
} from "./stock-item.styles";

export const StockItem = ({ stock }) => {
  const { deleteSymbols } = useContext(GlobalContext);
  console.log(deleteSymbols, GlobalContext);

  const { id, symbol } = stock;
  const {
    longName,
    currency,
    exchange,
    current_price,
    dividen_rate,
    buy_value,
    actual_return,
  } = stock.details;

  const currencySymbol = (currency) => {
    if (currency === "EUR") {
      return "€";
    } else if (currency === "USD") {
      return "$";
    }
  };

  return (
    <StockItemContainer>
      <StockItemStyle>{symbol.toUpperCase()}</StockItemStyle>
      <StockItemStyle specialWidth="large">{longName}</StockItemStyle>
      <StockItemStyle specialWidth="small">{exchange}</StockItemStyle>
      <StockNumberStyle>{dividen_rate}</StockNumberStyle>
      <StockNumberStyle>{actual_return}</StockNumberStyle>
      <StockPriceStyle current_price={current_price} buy_value={buy_value}>
        {current_price} {currencySymbol(currency)}
      </StockPriceStyle>
      <StockNumberStyle>{buy_value}</StockNumberStyle>
      <DeleteButton onClick={() => deleteSymbols(symbol)}>
        &#10005;
      </DeleteButton>
    </StockItemContainer>
  );
};
