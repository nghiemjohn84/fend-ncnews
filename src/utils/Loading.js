import React from 'react';

const Loading = ({ text }) => {
    return (
        <div>  
            <div className='loading'>
                <p>{text || 'loading...'}</p>
            </div>
        </div>
    )
}

export default Loading