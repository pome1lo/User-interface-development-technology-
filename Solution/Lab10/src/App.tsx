import React from 'react';
import './App.css';
import {data} from "./Data/State";
import Header from './components/Header/Header';
import CardList from './components/Cards/CardList/CardList';
import ShopProduts from './components/ShopProducts/ShopProducts';

function App() {
  return (
    <div className="App">
        <Header/>
        <ShopProduts cards={data}/>
    </div>
  );
}

export default App;
