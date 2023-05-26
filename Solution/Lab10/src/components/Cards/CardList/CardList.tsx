import React, {FC} from 'react';
import CardItem, {Card} from "../CardItem/CardItem";
import styles from './CardList.module.css';

type CardList = {
    cards: Card[]
}
const CardList: FC<CardList> = (cards) => {
    return (
        <div className={styles.cards}>
            {cards.cards.map((card) =>
                <CardItem key={card.id} card={card}/>
            )}
        </div>
    );
};

export default CardList;