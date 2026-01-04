import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <div id="home" className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center vh-100" style={{ marginTop: '-0px' }}>
            <Container>
                <h1 className="display-1 fw-bold">Explore the Cosmos</h1>
                <p className="lead mb-4">Journey through the universe with NASA's incredible imagery.</p>
                <Button variant="primary" size="lg" href="#gallery">View Gallery</Button>
            </Container>
        </div>
    );
};

export default Hero;
