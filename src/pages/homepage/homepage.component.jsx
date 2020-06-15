import React from "react";
import Search from '../../components/search/search.component';

import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <Search/>
    <div className="stocks-list-container">
      <div className="header-stocks-list">
        <span>Sigla</span>
        <span>Nome</span>
        <span>Mercato</span>
        <span>Rendimento</span>
        <span>Prezzo Attuale</span>
        <span>Prezzo Suggerito</span>
      </div>
      <div className="stocks-list">
        <span>MMM</span>
        <span>3M</span>
        <span>Francoforte</span>
        <span>8.5</span>
        <span>€ 167</span>
        <span>€ 32</span>
      </div>
    </div>
  </div>
);

export default Homepage;
