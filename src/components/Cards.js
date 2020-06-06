import React from 'react';
import About from './aboutus.jpg';
import {Card,Button} from 'react-bootstrap';
import './Card.css';

function Cards(){
    return(
        <div>
            <div className="container" style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                                
                <Card style={{ width: '18rem',margin:"20px" }}>
                    <Card.Img src={About} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                <Card style={{ width: '18rem',margin:"20px" }}>
                <Card.Img src={About} />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
           
    )
};

export default Cards;