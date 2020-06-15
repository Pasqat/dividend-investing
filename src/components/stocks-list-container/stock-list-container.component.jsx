import React from "react";
import { StocksList } from "../stocks-lists/stock-lists.component";

import "./stock-list-container.styles.scss";

const StockListContainer = () => (
  <div className="stocks-list-container">
    <div className="header-stocks-list">
      <div className="header-block">
        <span>Sigla</span>
      </div>
      <div className="header-block header-name">
        <span>Nome</span>
      </div>
      <div className="header-block header-exchange">
        <span>Mercato</span>
      </div>
      <div className="header-block on_right">
        <span>Dividendo</span>
      </div>
      <div className="header-block on_right">
        <span>Rendimento</span>
      </div>
      <div className="header-block on_right">
        <span>Prezzo Attuale</span>
      </div>
      <div className="header-block on_right">
        <span>Prezzo Suggerito</span>
      </div>
      <div className="header-block">
        <span>Rimuovi</span>
      </div>
    </div>
    <StocksList/>
  </div>
);

export default StockListContainer;
