import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Header = (props) => {
    return (
        <div>
        <h1>Header</h1>
        <h3>Logged In As: {props.loggedInAs}</h3>

        </div>
        
    )
}

export default Header