import React from 'react';
import "./App.css";
import { 
    Container, 
    Row, 
    Col, 
    Image, 
    Button,
    Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){

  return (
      <div className="Home">
          <main>
              <Container>
                  <Row className="px-4 my-5">
                      <Col sm={7}>
                          <Image 
                              src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_%28blue_dots%29.svg" 
                              fluid
                              rounded
                              className="" 
                          />
                      </Col>
                      <Col sm={5}>
                          <h1 className="font-weigh-light">Make Your Graphs And Math Much Easier</h1>
                          <p>PreAnalysis will tell you how to deal with your graphs, maths, and maps. Most of the case</p> 
                           <Button variant="outline-primary">Get Started!</Button>
                      </Col>
                  </Row>
                  <Row>
                      <Card className="text-center bg-secondary text-white my-5 py-4">
                          <Card.Body>This is some text within a card body</Card.Body>
                      </Card>
                  </Row>
                  <Row xs={1} md={2} className="g-4">
                  <Col sm={5}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/736x/63/22/56/632256734284bf55c3de0e535b35d657.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={5}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                  </Row>
              </Container>
          </main>
      </div>
  );
}

export default Home;
