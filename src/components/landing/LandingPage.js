import React from 'react';
import Introduction from './Introduction';
import AboutUs from './AboutUs';
import Services2 from './Services2';
import FooterPage from './FooterPage'

function LandingPage(){
    return(
        <div>
            <div id="intro">
                <Introduction/>
            </div>
            <hr className="container"/>
            <div id="services">
                <Services2/>
            </div>
            <hr className="container"/>
            
            <div id="aboutUs">
                <AboutUs/>
            </div>
            <hr className="container"/> 
            <div>
                <FooterPage/>
            </div>
        </div>
    )
};

export default LandingPage;