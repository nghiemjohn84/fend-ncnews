import React from 'react';
import {Link} from '@reach/router'

const Navbar = () => {
    return (
        <nav>
            <h1>Navbar</h1>
            <Link to='/'>Home Page</Link>{' '}
            <Link to='/articles'>Articles</Link>
        </nav>
    )
}

export default Navbar