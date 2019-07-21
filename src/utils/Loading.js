import React from 'react';
import styles from '../styles/Loading.module.css'
import LoadingImg from '../images/LoadingImg.gif'

const Loading = ({ text }) => {
    return (
        <div>  
            <div className={styles.loading}>
                <h2>{text || 'loading...'}</h2>
                <img src={LoadingImg} alt={'LoadingImg'}/>
            </div>
        </div>
    )
}

export default Loading