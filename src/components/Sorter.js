import React from 'react';
import styles from '../styles/Sorter.module.css'

const Sorter = (props) => {
    return (
        <>
        <div className={styles.sorter} >
            <select onChange={props.setSort}>
                <option value="created_at">Sort by Date</option>
                <option value="comment_count">Sort by Comments</option>
                <option value="votes">Sort by Votes</option>
            </select>
        </div>
        <div className={styles.orderer}>
            <select onChange={props.setOrder}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
        </>
        
    )
}

export default Sorter