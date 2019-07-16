import React from 'react';
import '../styles/Loading.css'
import LoadingImg from '../images/LoadingImg.gif'

const Loading = ({ text }) => {
    return (
        <div>  
            <div className='loading'>
                <p>{text || 'loading...'}</p>
                <img src={LoadingImg} alt={'LoadingImg'}/>
            </div>
        </div>
    )
}

export default Loading