import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./search.styles.scss";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { addSymbols, isLoading } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newStock = {
      symbol: searchTerm,
    };
    
    addSymbols(newStock);

    setSearchTerm("");
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
        { isLoading ? '💩' : ''}
      </div>
    </div>
  );
};

export default Search;
