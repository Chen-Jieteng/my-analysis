import React from 'react';
import {
    Container,
    Carousel,
    Col,
} from 'react-bootstrap';

function Data(){

    return(
        <Container>
            <Col className="m-5">
            <Carousel variant="white">
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://lifescienceacrosstheglobe.org/sites/default/files/inline-images/LSAGseries_Facebook.jpg"
                alt="First slide"
            />
            {/* <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Economist_Logo.svg/1200px-The_Economist_Logo.svg.png"
                alt="Second slide"
            />
            {/* <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://ssl.quiksilver.com/static/EL/default/category-assets/experiences/2019/ups/4ups/type3//img//campaigns/201/nat-geo-future-nature/national-geographic-future-nature-16.jpg"
                alt="Third slide"
            />
            {/* <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
        </Col>
      </Container>
    );
}

export default Data;