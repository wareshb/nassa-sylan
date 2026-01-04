import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const photos = [
    {
        id: 1,
        title: "Galaxy Cluster",
        url: "https://images-assets.nasa.gov/image/PIA13101/PIA13101~orig.jpg",
        description: "A stunning view of a distant galaxy cluster."
    },
    {
        id: 2,
        title: "Nebula",
        url: "https://images-assets.nasa.gov/image/PIA15415/PIA15415~orig.jpg",
        description: "Colorful clouds of gas and dust in a nebula."
    },
    {
        id: 3,
        title: "Earth from Space",
        url: "https://images-assets.nasa.gov/image/PIA00122/PIA00122~orig.jpg",
        description: "Our blue marble as seen from orbit."
    },
    {
        id: 4,
        title: "Martian Surface",
        url: "https://images-assets.nasa.gov/image/PIA25626/PIA25626~orig.jpg",
        description: "High resolution imagery of the red planet."
    },
    {
        id: 5,
        title: "International Space Station",
        url: "https://www.nasa.gov/wp-content/uploads/2025/12/hubble-ngc4388-potw2550a.jpg",
        description: "The ISS orbiting Earth."
    },
    {
        id: 6,
        title: "Stellar Jet",
        url: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~orig.jpg",
        description: "NASA’s James Webb Space Telescope captured a blowtorch of seething gasses erupting from a volcanically growing monster star in this image released on Sept. 10, 2025. "
    },
    {
        id: 7,
        title: "Solar Flare",
        url: "https://www.nasa.gov/wp-content/uploads/2025/12/stsci-01k47zq63eq919rd23c62rhqpy.jpg?resize=2000,1913",
        description: "A massive solar flare erupting from the sun."
    },
    {
        id: 8,
        title: "XRISM Finds Chlorine, Potassium in Cas A",
        url: "https://www.nasa.gov/wp-content/uploads/2025/12/casa-lg.jpg",
        description: "This composite image of the Cassiopeia A (or Cas A) supernova remnant, released Jan."
    },
    {
        id: 9,
        title: "City Lights and Atmospheric Glow",
        url: "https://www.nasa.gov/wp-content/uploads/2025/11/54811765168-6fe43916d5-o.jpg",
        description: "JAXA (Japan Aerospace Exploration Agency) astronaut Kimiya Yui captured this photo of southern Europe and the northwestern Mediterranean coast from the International Space Station as it orbited 261 miles above Earth on Aug."
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-5">
            <Container>
                <h2 className="text-center mb-5 text-white">NASA Gallery</h2>
                <Row>
                    {photos.map((photo) => (
                        <Col md={4} key={photo.id} className="mb-4">
                            <Card className="h-100 bg-dark text-white border-secondary">
                                <Card.Img variant="top" src={photo.url} style={{ height: '250px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{photo.title}</Card.Title>
                                    <Card.Text>
                                        {photo.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Gallery;
