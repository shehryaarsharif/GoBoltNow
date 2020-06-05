import React from 'react';
import './AboutUs.css'
import Background from './aboutus.jpg'

function AboutUs(){
    return(
        <div className="mt4">
            <div className="row no-gutters">
                <div className="col-md-6 no-gutters">
                    <div className="rightside">
                        <img src={Background} />
                    </div>
                </div>
                <div className="col no-gutters" style={{marginTop:"5%", marginLeft:"5%", display:"flex",justifyContent:"center"}}>
                    <div className="rightside" >
                       <h2 >About</h2><br/>  
                       <h5 >Making a positive impact</h5 ><br/>
                        <p>I believe living a healthy lifestyle begins with maintaining a strong and fit body. My aim is to help you identify your fitness goals, design an exercise program that fits your needs and guide you through every exercise, every workout. My holistic approach to fitness and health will have you feeling great and seeing results in no time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;