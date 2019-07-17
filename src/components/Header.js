import React from 'react';
import styles from '../styles/Header.module.css'


const Header = (props) => {
    return (
        <div className="header">
        <h1>NC NEWS</h1>
        <h3>Logged In As: {props.loggedInAs}</h3>
        </div>
        
    )
}

export default Header