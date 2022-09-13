import React from 'react';

const CalculatorButton = (props) => {
    return (
        <input
        type="button"
        value = {props.label}
        onClick = {props.handleClick}
        />
    );
}

export default CalculatorButton;