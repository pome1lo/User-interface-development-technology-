import React, {FC} from 'react';
// @ts-ignore
import styles from './CardItem.module.css';
const CardItem: FC<CardItem> = (card) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src = {card.card.urlImage}/>
            <div className={styles.nameModel}>{card.card.nameModel}</div>
            <div className={styles.nameCompany}>{card.card.nameCompany}</div>
            <div className={styles.price}>{card.card.price}$</div>
        </div>
    );
};

export default CardItem;
export type Card = {
    id: number;
    nameModel: string;
    nameCompany: string;
    price: number;
    urlImage: string;
}
type CardItem = {
    card: Card;
}