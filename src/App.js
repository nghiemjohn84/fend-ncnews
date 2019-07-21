import React from 'react';
import {Router} from '@reach/router'
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Articles from './components/Articles/Articles'
import Home from './components/Home'
import Article from './components/Article/Article'
import ErrorPage from './utils/ErrorPage'

class App extends React.Component {
  state = {
    loggedInAs: 'jessjelly',
  }


  render() {
    const {loggedInAs} = this.state
    return (
    <div className="App">
      <Header loggedInAs={loggedInAs}/>
      <Navbar />
      <Router>
        <Home path='/'/>
        <Articles path='/articles' loggedInAs={loggedInAs}/>
        <Articles path='/articles/topic/:topic' loggedInAs={loggedInAs}/>
        <Article path='/articles/:article_id' loggedInAs={loggedInAs} />
        <ErrorPage path='/*'/>
      </Router>

    </div>
  );


}
  
}

export default App;