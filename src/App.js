import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import AboutUs from './components/AboutUs';
import Services from './components/Services'
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
        <div style={{height:"100vh"}} id="services">
          <Services/>
        </div>
        <div style={{height:"100vh"}} id="aboutUs">
          <AboutUs/>
        </div>
        
        {/* <div>
          <FooterPage/>
        </div> */}
    </div>
  );
}


export default App;
