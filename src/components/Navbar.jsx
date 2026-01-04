import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="NASA Logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    NASA Explorer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
