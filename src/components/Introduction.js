import React from 'react';
import './Introduction.css';
import Page1 from './Page1.jpg';
function Introduction(){
    return(
        // <div className="bg_image" style={{height:"100vh"}}>
        //     <h1 className="text1">Introducing</h1> <h1 className="text1">goboltnow</h1>
        //     <h4 className="text2">Guaranteed Results</h4>
        // </div>
        <div class="w3-content" style={{maxWidth:"100%"}}>
            <img class="mySlides" src={Page1} style={{width:"100%"}}/>
        </div>
    );
}

export default Introduction;