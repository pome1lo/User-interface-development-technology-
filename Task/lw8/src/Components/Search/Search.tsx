import React, {FC} from 'react';
import CardList from "../Cards/CardList/CardList";
import styles from './Search.module.css';

type filterListProps = {
    filterList: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = (filterFunction:filterListProps) => {
    return (
        <div>
            <input className={styles.search} onChange={filterFunction.filterList} placeholder="Поиск..."/>
        </div>
    );
};

export default Search;