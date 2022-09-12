import React from 'react';
import { useState } from 'react'; 
import "./App.css";
import { 
    Navbar, 
    Container, 
    Nav, 
    Row, 
    Col, 
    Image, 
    Button,
    Card,
    Offcanvas,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  
  return (
      <div className="App">
          <header>
              <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                  <Navbar.Brand href="">
                      <img
                          alt=""
                          src="https://www.hexagondata.com/wp-content/uploads/2020/07/13_35_17.png"
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                      />{' '}
                      PreAnalysis
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="">Data</Nav.Link>
                      <Nav.Link href="">Maths</Nav.Link>
                      <Nav.Link href="">Graphs</Nav.Link>
                      <Nav.Link href="">Maps</Nav.Link>
                      <Nav.Link href="">Contact</Nav.Link>
                      <Nav.Link 
                          onClick={toggleShow} 
                          className="me-auto" 
                          backdrop="true"
                      >
                          More
                      </Nav.Link>
                      <Offcanvas 
                          show={show} 
                          onHide={handleClose} 
                          placement="end"
                          scroll="true"
                      >
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>More Functions</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="">Data</Nav.Link>
                            <Nav.Link href="">Maths</Nav.Link>
                            <Nav.Link href="">Graphs</Nav.Link>
                            <Nav.Link href="">Maps</Nav.Link>
                            <Nav.Link href="">Contact</Nav.Link>
                          </Nav>
                        </Offcanvas.Body>
                      </Offcanvas>
                  </Nav>
                  </Navbar.Collapse>
              </Container>
              </Navbar>
          </header>
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
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <Col>
                        <Card>
                          <Card.Img variant="top" src="https://i.pinimg.com/736x/63/22/56/632256734284bf55c3de0e535b35d657.jpg" />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a longer card with supporting text below as a natural
                              lead-in to additional content. This content is a little bit
                              longer.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
              </Container>
          </main>
          <footer className="py-5 mt-5 bg-dark">
            <div className="container px-4 px-lg-5">
              <p className="m-0 text-center text-white">
                Copyright &copy; Jieteng Chen - PreAnalysis 2021
              </p>
            </div>
          </footer>
      </div>
  );
}

export default App;
