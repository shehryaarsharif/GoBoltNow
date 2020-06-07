import React from 'react';
import Bolt from './Black-01.jpg'; 
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import { Nav, Navbar} from "react-bootstrap";
import {Link, withRouter} from 'react-router-dom';

function Header(){
    return(
        <div>
        <Navbar bg="light" expand="lg" style={{padding:"1%"}}>
            <Link to="/"> <img style={{height:"50%"}} src={Bolt}/> </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">   
                <Nav.Link href="#home">Shop</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Trainings</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#link" className="mr2">Contact Us</Nav.Link>
                    <FaFacebookF className="mt2 mr2"/>
                    <FaTwitter className="mt2 mr2"/>
                    <AiFillInstagram className="mt2 mr2"/>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;