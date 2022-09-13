import React from 'react';
import { Link } from 'react-router-dom';
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

function NavBar(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
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
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/data">Data</Nav.Link>
                <Nav.Link as={Link} to="/maths">Maths</Nav.Link>
                <Nav.Link as={Link} to="/graphs">Graphs</Nav.Link>
                <Nav.Link as={Link} to="/maps">Maps</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link 
                    onClick={toggleShow} 
                    className="me-2" 
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
    );
}

export default NavBar;