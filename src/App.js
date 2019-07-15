import React from 'react';
import {Router} from '@reach/router'
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import Home from './components/Home'

class App extends React.Component {
  state = {
    loggedInAs: 'JessJelly'
  }


  render() {
    const {loggedInAs} = this.state
    return (
    <div className="App">
      <Header loggedInAs={loggedInAs}/>
      <Navbar />
      <Router>
        <Home path='/' />
        <Articles path='/articles' />
      </Router>

    </div>
  );


}
  
}

export default App;
