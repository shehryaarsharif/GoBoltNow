import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import AboutUs from './components/AboutUs';
import Services2 from './components/Services2';
import FooterPage from './components/FooterPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div >
        <div>
          <Header/>
        </div>
        <div id="intro">
          <Introduction/>
        </div>
        <hr className="container"/>
        <div id="services">
          <Services2/>
        </div>
        
        
        <div id="aboutUs">
          <AboutUs/>
        </div>
        
        <div>
          <FooterPage/>
        </div>
    </div>
  );
}


export default App;
