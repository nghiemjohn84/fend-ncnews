import React from 'react';
import coding from '../images/coding.jpg'
import cooking from '../images/cooking.jpg'
import football from '../images/football.jpeg'

const Home = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <img src={cooking} alt={'cooking'}/>
            <img src={coding} alt={'coding'}/>
            <img src={football} alt={'football'}/>
        </div>
    )
}

export default Home