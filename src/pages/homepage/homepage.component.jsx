import React from "react";
import Search from '../../components/search/search.component';
import StockListContainer from '../../components/stocks-list-container/stock-list-container.component';

import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <Search/>
    <StockListContainer/>
  </div>
);

export default Homepage;
