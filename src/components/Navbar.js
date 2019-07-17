import React from 'react';
import {Link} from '@reach/router'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <Link to='/'><button className='navButton'>Home</button></Link>
            <Link to='/articles'><button className='navButton'>All Articles</button></Link>
            <Link to='/articles/topic/cooking'><button className='navButton'>Cooking</button></Link>
            <Link to='/articles/topic/football'><button className='navButton'>Football</button></Link> 
            <Link to='/articles/topic/coding'><button className='navButton'>Coding</button></Link>   
        </nav>
    )
}

export default Navbar