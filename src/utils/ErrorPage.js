import React from 'react';

const ErrorPage = ({text, err}) => {
    return(
        <div>
            <h2>{text || 'Oops, something went wrong...'}</h2>
            {!!err && <p>{err.message}</p>}
        </div>
    )

}


export default ErrorPage