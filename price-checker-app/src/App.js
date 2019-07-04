import React, { Component } from 'react';
import './App.css';
import NavComponent from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavComponent />
        <Main />
        <Footer />
      </div>
    );
  }
}


export default App;
