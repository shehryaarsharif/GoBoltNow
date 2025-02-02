import React from 'react';
import Cards from './Cards';
import { Button } from "react-bootstrap";


function Services(){
    return(
        <div className="mt4">
            <div className="tc">
                <h3>Our Products and Services</h3>
            </div>
            <div className="mt2 tc">
                {/* <Button variant="dark" className="ma3">What I do</Button>
                <Button variant="dark">goboltnow - programs</Button> */}
            </div>
            <div className="container" style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                <Cards name="Apparel" />
                <Cards name="Shoes" time = "1hr" price="$19.99"/>
                <Cards name="Training Program" time = "1hr" price="$19.99"/>
                
            </div>
        </div>
    )
};

export default Services;