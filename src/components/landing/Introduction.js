import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Introduction.css';
import Page1 from './Page1.jpg';
import aboutus from './aboutus.jpg'
class Introduction extends Component {
    render() {
        return (
            <div >
            <Carousel  showArrows={true}  >
                <div>
                    <img id="img-1" src={aboutus}  />
                    <div className="container">
                        <div className="centered"> 
                        <Button variant="light" style={{padding:"15px"}}><h4>SHOP NOW</h4></Button>
                        </div>
                        {/* <div className=" legend pointer dim"><p className="txt"> GOSHOPNOW </p></div> */}
                    </div>
                </div>
                <div>
                    <img id="img-2" src={aboutus} />
                    <div className="centered"> 
                        <Button variant="light" style={{padding:"15px"}}><h4>SHOP NOW</h4></Button>
                        </div>
                    {/* <div className=" legend pointer dim"><p className="txt"> GOSHOPNOW </p></div> */}
                </div>
                <div>
                    <img id="img-3" src={aboutus} />
                    <div className="centered"> 
                        <Button variant="light" style={{padding:"15px"}}><h4>SHOP NOW</h4></Button>
                    </div>
                    {/* <div className=" legend pointer dim"><p className="txt"> GOSHOPNOW </p></div> */}
                </div>
            </Carousel>
            </div>
        );
    }
};

export default Introduction;
 