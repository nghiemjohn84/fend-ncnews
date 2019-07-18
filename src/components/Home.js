import React from 'react';
import coding from '../images/coding.jpg'
import cooking from '../images/cooking.jpg'
import football from '../images/football.jpeg'
import styles from '../styles/Home.module.css'
import {Link} from '@reach/router'

const Home = () => {
    return(
        <div className={styles.homepage}>
            <h1>Home Page</h1>
            <Link to='/articles/topic/cooking'><img className={styles.img1} src={cooking} alt={'cooking'}/></Link>
            <Link to='/articles/topic/football'><img className={styles.img3} src={football} alt={'football'}/></Link> 
            <Link to='/articles/topic/coding'><img className={styles.img2} src={coding} alt={'coding'}/></Link>   
            
            
        </div>
    )
}

export default Home