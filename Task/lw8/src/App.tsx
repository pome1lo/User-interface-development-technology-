import React from 'react';
import './App.css';
import Search from './Components/Search/Search';
import {watchs} from "./Data/state";
import CardList from "./Components/Cards/CardList/CardList";
import {Card} from "./Components/Cards/CardItem/CardItem";
import ShopProduts from "./Components/ShopProducts/ShopProduts";

function App() {
  return (
    <div className="App">
        <ShopProduts cards={watchs}/>
    </div>
  );
}

export default App;
