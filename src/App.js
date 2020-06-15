import React from "react";

import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Homepage />
      <div className='footer'>
        Disclaimer - We are not a registerd investment, legal or tax advisor or
        a broker/dealer. All investment/financial opinions expressed by us are
        from the personal research and experience and are intended as
        educational material
      </div>{" "}
    </GlobalProvider>
  );
}

export default App;
