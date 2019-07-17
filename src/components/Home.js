import React from 'react';
import coding from '../images/coding.jpg'
import cooking from '../images/cooking.jpg'
import football from '../images/football.jpeg'
import styles from '../styles/Home.module.css'

const Home = () => {
    return(
        <div className={styles.homepage}>
            <h1>Home Page</h1>
            <img className={styles.img1} src={cooking} alt={'cooking'}/>
            <img className={styles.img2} src={coding} alt={'coding'}/>
            <img className={styles.img3} src={football} alt={'football'}/>
        </div>
    )
}

export default Home