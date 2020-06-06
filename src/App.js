import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import AboutUs from './components/AboutUs';
import Services from './components/Services'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div >
        <Header/>
        <div id="intro">
          <Introduction/>
        </div>
        <div id="aboutUs">
          <AboutUs/>
        </div>
        <div style={{height:"100vh"}} id="services">
          <Services/>
        </div>
    </div>
  );
}


export default App;
