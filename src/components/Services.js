import React from 'react';
import Cards from './Cards';
import { Button } from "react-bootstrap";


function Services(){
    return(
        <div className="mt4">
            <div className="tc">
                <h3>Our Services</h3>
            </div>
            <div className="mt2 tc">
                <Button variant="dark" className="ma3">What I do</Button>
                <Button variant="dark">goboltnow-Programs</Button>
            </div>
            <div>
                <Cards/>
            </div>
        </div>
    )
};

export default Services;