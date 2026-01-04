import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <section id="about" className="py-5 bg-black text-white">
            <Container>
                <h2 className="text-center mb-5">About NASA</h2>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <Card className="bg-dark text-white border-secondary shadow">
                            <Card.Body>
                                <Card.Text>
                                    The National Aeronautics and Space Administration (NASA) is an independent agency of the U.S. federal government responsible for the civil space program, aeronautics research, and space research.
                                </Card.Text>
                                <Card.Text>
                                    Established in 1958, NASA has led space exploration efforts, including the Apollo moon landing missions, the Skylab space station, and later the Space Shuttle. NASA is supporting the International Space Station and is overseeing the development of the Orion Multi-Purpose Crew Vehicle, the Space Launch System, and Commercial Crew vehicles.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
