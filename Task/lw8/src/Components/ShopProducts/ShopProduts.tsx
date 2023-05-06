import React, {FC, useState} from 'react';
import Search from "../Search/Search";
import {watchs} from "../../Data/state";
import CardList from "../Cards/CardList/CardList";
import {Card} from "../Cards/CardItem/CardItem";
import styles from './ShopProducts.module.css';

const ShopProduts: FC<CardList> = (cardsList) => {
    const [cardsFull,setCards] = useState<Card[]>(cardsList.cards);
    const [filterCards,setFilterCards] = useState<Card[]>(cardsList.cards);

    const filterCardsCollection = (event: React.ChangeEvent<HTMLInputElement>) => {
        let strUser: string = event.target.value.toLowerCase();
        let filterResult = cardsFull.filter(card => (card.nameCompany.toLowerCase()).indexOf(strUser) !== (-1) ||
                                                    (card.nameModel.toLowerCase()).indexOf(strUser) !== (-1))
        setFilterCards(filterResult);
    }

    return (
        <div className='center'>
            <Search filterList = {filterCardsCollection}/> {
                filterCards.length !== 0? 
                    <CardList cards={filterCards}/> :
                    <div className={styles.emptyList}>
                        <div className="four_zero_four_bg">
                            <h1 className="text-center">404</h1>
                            <h6 className="text-center">Похоже что мы ничего не нашли. Попробуйте поискать что-нибудь другое</h6>
                            <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"/>
                        </div>
                    </div>
                }   
        </div>
    );
};

export default ShopProduts;