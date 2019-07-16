import React from 'react';
import error from '../images/error.png'

const ErrorPage = ({text, err}) => {
    return(
        <div>
            <h1>{text || 'Oops, something went wrong...'}</h1>
            {!!err && <p>{err.message}</p>}
            <img src={error} alt={'error'}/>
        </div>
    )
}

export default ErrorPage