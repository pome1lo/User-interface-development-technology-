import React, {FC} from 'react';
import styles from './CardItem.module.css';

const CardItem:FC<CardItem> = (card) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src ={card.card.image}/>
            <div className={styles.content}>
                <p>{card.card.companyName}</p>
                <p className={styles.vacancy}>{card.card.vacancy}</p>
                <p>{card.card.city}</p>
                <div className={styles.container}>
                {card.card.technologies.map((x) =>
                    <div className={styles.technologies}>
                        <p>{x}</p>
                    </div>
                )}
                </div>
            </div>
            <div className={styles.info}>
                <button>
                    <img src={card.card.isFavorite ? 
                        "https://cdn-icons-png.flaticon.com/512/833/833472.png" :
                        "https://cdn-icons-png.flaticon.com/512/833/833300.png"    
                        }/>
                </button>
                <p>{card.card.date}</p>
            </div>
        </div>
    );
};

export default CardItem;
export type Card = {
    id: number;
    city: string;
    date: string;
    image: string;
    vacancy: string;
    isFavorite: boolean;
    companyName: string;
    content: description;
    technologies: string[];
}
type CardItem = {
    card: Card;
}
type description = {
    mainTitle: string;
    firstContent: string;
}

