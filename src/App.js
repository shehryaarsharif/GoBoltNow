import React from 'react';
import Header from './components/Header';
import LandingPage from './components/landing/LandingPage';
import Services from './components/shop/Services';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div >
      <Router>  
        <Switch>
          <Route exact path="/">
            <Header/>
            <LandingPage/>
          </Route>
          <Route exact path="/shop">
            <Header/>
            <Services/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
