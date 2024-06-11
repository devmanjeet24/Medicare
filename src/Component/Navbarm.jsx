import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Navbarm = () => {
    return (
        <>

            <div className='Hero-section'>


                <Navbar expand="lg" className="Header">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src="./MediCare+.png" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/service">Service</Link>
                                <Link to="/news">News</Link>
                                <button className='pagebutton'><Link to="/contact">Contact</Link></button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>





        </>
    )
}

export default Navbarm;