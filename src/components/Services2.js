import React from 'react';
import './Services2.css';
import movebetter from './movebetter.png';
import breathein from './breathein.png';
import breatheout from './breatheout.png';
function Services2(){
    return(
    <div>
    <div className="tc">
        <h2>Products</h2>
    </div>
  <div class="container">
      
    <img className="pointer grow img-1" src={movebetter}/>
    <img className="pointer grow img-1" src={breathein}/>
  </div>
  </div>
    )

};

export default Services2;