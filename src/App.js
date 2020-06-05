import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import AboutUs from './components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div >
        <Header/>
        <div >
          <Introduction/>
        </div>
        <div>
          <AboutUs/>
        </div>
    </div>
  );
}


export default App;
