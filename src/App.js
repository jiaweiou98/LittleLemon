import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Nav/>
        <Main/>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
