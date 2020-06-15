import React from 'react';

import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header/>
      <Homepage/>
    </GlobalProvider>
  );
}

export default App;
