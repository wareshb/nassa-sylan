import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Github } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="text-center text-white py-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)', borderTop: '1px solid #333' }}>
            <Container>
                <Row className="justify-content-center mb-3">
                    <Col xs="auto">
                        <Button variant="outline-light" className="m-1 rounded-circle p-2" href="https://facebook.com" target="_blank">
                            <Facebook size={20} />
                        </Button>
                        <Button variant="outline-light" className="m-1 rounded-circle p-2" href="https://twitter.com" target="_blank">
                            <Twitter size={20} />
                        </Button>
                        <Button variant="outline-light" className="m-1 rounded-circle p-2" href="https://instagram.com" target="_blank">
                            <Instagram size={20} />
                        </Button>
                        <Button variant="outline-light" className="m-1 rounded-circle p-2" href="https://github.com" target="_blank">
                            <Github size={20} />
                        </Button>
                    </Col>
                </Row>
                <p className="mb-0">&copy; {new Date().getFullYear()} NASA Explorer. Designed for space enthusiasts.</p>
                <small className="text-muted d-block mb-1">Images courtesy of NASA Image and Video Library</small>
                <small className="text-white-50">Designed by: Bashar Alwaresh</small>
            </Container>
        </footer>
    );
};

export default Footer;
