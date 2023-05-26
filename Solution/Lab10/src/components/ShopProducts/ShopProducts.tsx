import React, {FC, useState} from 'react';
import CardList from "../Cards/CardList/CardList";
import {Card} from "../Cards/CardItem/CardItem";
import styles from './ShopProducts.module.css';

const ShopProduts: FC<CardList> = (cardsList) => {
    const [cardsFull,setCards] = useState<Card[]>(cardsList.cards);
    const [filterCards,setFilterCards] = useState<Card[]>(cardsList.cards);

    const filterCardsCollection = (event: React.ChangeEvent<HTMLInputElement>) => {
        let strUser: string = event.target.value.toLowerCase();
        let filterResult = cardsFull.filter(card => (card.vacancy.toLowerCase()).indexOf(strUser) !== (-1) ||
                                                    (card.companyName.toLowerCase()).indexOf(strUser) !== (-1))
        setFilterCards(filterResult);
    }

    return (
        <div className={styles.container}>
            <CardList cards={filterCards}/>
        </div>
    );
};

export default ShopProduts;