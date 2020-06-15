import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./search.styles.scss";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { addSymbols } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newStock = {
        id: Math.floor(Math.random() * 100000000),
        symbol: searchTerm,
        details: {
          actual_return: 0,
          buy_value: 0,
          currency: "USD",
          current_price: 0,
          dividen_rate: 0,
          eps: 0,
          exchange: "TEST",
          growth: 0,
          industry: "TEST",
          longName: "Test",
          roe: 0,
          sector: "Test",
        }
    }
    addSymbols(newStock)

    setSearchTerm('');
  };

  return (
    <div className="search">
      <div className="search-bar">
        <form className="form-search-bar" onSubmit={onSubmit}>
          <input
            type="text"
            name="search field"
            value={searchTerm}
            placeholder="Digita un simbolo per aggiungere..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input name="submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Search;
