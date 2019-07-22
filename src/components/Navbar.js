import React from 'react';
import {Link} from '@reach/router'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to='/' ><button >Home</button></Link>
            <Link to='/articles' onClick={() => window.location.refresh()}><button >All Articles</button></Link>
            <Link to='/articles/topic/cooking' onClick={() => window.location.refresh()}><button>Cooking</button></Link>
            <Link to='/articles/topic/football' onClick={() => window.location.refresh()}><button>Football</button></Link> 
            <Link to='/articles/topic/coding' onClick={() => window.location.refresh()}><button>Coding</button></Link>   
        </nav>
    )
}

export default Navbar