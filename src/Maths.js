import React, { useState } from 'react';
import {
    Container,
    Row,
    Card,
    Form,
    Button,
    ToggleButton,
    ToggleButtonGroup,
} from 'react-bootstrap';
import Calculator from './SimpleCalculator/Calculator';

function Maths(){
    const [value, setValue] = useState([1, 5]);
    const handleChange = (val) => setValue(val);

    return(
        <Container>
            <Row>
                <div className="mt-5">
                    <h1><p>Maths</p></h1>
                    <h5><p>Explore, analyze, and share quality data.</p>
                        <p>Learn more about data types, creating, and collaborating.</p>
                    </h5>
                </div>
            </Row>
            <Row>
                <Card className="text-center bg-secondary text-white my-5 py-4">
                    <Card.Body><h2>Mathematical Calculator</h2></Card.Body>
                </Card>
            </Row>
            <Row>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder= "Enter a Math problem"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Go</Button>
                </Form>
            </Row>
            <Row className="m-5">
                <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                    <ToggleButton id="tbg-btn-1" value={1}>
                        Calculators
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-2" value={2}>
                        Graphing
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-3" value={3}>
                        Geometry
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-4" value={4}>
                        Notebook
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-5" value={5}>
                        Practice
                    </ToggleButton>
                </ToggleButtonGroup>
            </Row>
            <Row>
                <Calculator />
            </Row>
        </Container>
    );
}

export default Maths;