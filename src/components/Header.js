import React from 'react';
import styles from '../styles/Header.module.css'
import {Link} from '@reach/router'


const Header = (props) => {
    return (
        <div className={styles.header}>
        <Link className={styles.link}to='/'><h1 >NC NEWS</h1></Link>
        <h3 >Logged In: {props.loggedInAs}</h3>
        </div>
        
    )
}

export default Header