import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./search.styles.scss";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { searchSymbols } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newSearch = {
        searchTerm: searchTerm
    }
    searchSymbols(newSearch)

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
            placeholder="Digita un simbolo per cercare..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input name="submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Search;
