import React from 'react';
import About from './aboutus.jpg';
import {Card,Button} from 'react-bootstrap';
import './Card.css';

function Cards(props){

    const { name , time , price } = props;
    return(                     
        <Card style={{ height:'25rem', width: '20rem',margin:"20px",borderColor:"black" }}>
            <Card.Img src={About} />
            <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text> */}
                <h4>{name}</h4><hr color="black"/>
                <div>
                    <span>{time}</span>
                    <br/>
                    <span>{price}</span>
                </div>
                <Button style={{marginTop:"10%"}} variant="dark">Book Now</Button>
            </Card.Body>
        </Card>
            
            
           
    )
};

export default Cards;







{/* <div>
            <div className="container" style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                                
                <Card style={{ height:'25rem', width: '20rem',margin:"20px",borderColor:"black" }}>
                    <Card.Img src={About} />
                    <Card.Body>
                        <h4>Flexbility Training</h4><hr color="black"/>
                        <div>
                            <span>1hr</span>
                            <br/>
                            <span>$19.99</span>
                        </div>
                        <Button style={{marginTop:"10%"}} variant="dark">Book Now</Button>
                    </Card.Body>
                    </Card>
                <Card style={{ height:'25rem',width: '20rem',margin:"20px",borderColor:"black" }}>
                <Card.Img src={About} />
                <Card.Body>
                    <h4>Cardio Fitness</h4><hr color="black"/>
                    <div>
                            <span>1hr</span>
                            <br/>
                            <span>$19.99</span>
                        </div>
                    <Button style={{marginTop:"10%"}} variant="dark">Book Now</Button>
                </Card.Body>
                </Card>
                </div>
            </div> */}