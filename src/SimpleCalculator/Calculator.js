import React from 'react';
import OutputScreen from './OutputScreen';
import CalculatorButton from './CalculatorButton';

class Calculator extends React.Component {

    constructor() {
        super();
    
        this.state = {
            question: '',
            answer: ''
        }
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const value = event.target.value;

        switch (value) {
            case '=' : {
                if (this.state.question !== '') {
                    var ans='';
                    try{
                        ans = eval(this.state.question);
                    }
                    catch(err){
                        this.setState({answer: "Math Error"});
                    }
                }
                if (ans === undefined) {
                    this.setState({answer: "Math Error"});
                }
                else {
                    this.setState({answer: ans, question: ''});
                    break;
                }
            }
            case 'Clear' : {
                this.setState({question: '', answer: ''});
                break;
            }
            case 'Delete' : {
                var str = this.state.question;
                str = str.substring(0, str.length - 1);
                break;
            }
            default : {
                this.setState({question: this.state.question += value});
                break;
            }
        }
    }

    render(){
        return(
            <div className='frame'>
                <div class="mainCalc">
                    <OutputScreen/>
                    <div className="button-row">
                        <CalculatorButton label={'Clear'} handleClick={this.handleClick} />
                        <CalculatorButton label={'Delete'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'.'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'/'} handleClick={this.handleClick} /> 
                    </div>
                    <div className="button-row">
                        <CalculatorButton label={'7'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'8'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'9'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'*'} handleClick={this.handleClick} /> 
                    </div>
                    <div className="button-row">
                        <CalculatorButton label={'4'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'5'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'6'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'-'} handleClick={this.handleClick} /> 
                    </div>
                    <div className="button-row">
                        <CalculatorButton label={'1'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'2'} handleClick={this.handleClick} /> 
                        <CalculatorButton label={'3'} handleClick={this.handleClick} />
                        <CalculatorButton label={'+'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <CalculatorButton label={'0'} handleClick={this.handleClick} />
                        <CalculatorButton label={'='} handleClick={this.handleClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;