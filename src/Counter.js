import React, {Component} from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';

class Counter extends Component {

    constructor (props) {
        super(props);

        let initValue = 0;
        

        if(!isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }

        this.state = {
            counterValue: initValue,
            stepValue: ''
        };       

    }

    addOne = () => {
        this.setState(prevState=>{
            return({counterValue: prevState.counterValue + parseInt(this.state.stepValue)});
        })
    }

    addStep = (event) => {
        this.setState(prevState=>{
            return({counterValue: prevState.counterValue + parseInt(this.state.stepValue)});
        })
        event.preventDefault();
    }

    updateStep = event => {
        console.log(event.target.value);
        this.setState({stepValue: event.target.value})
    }
    
    reset = resetBool => {
        if(resetBool) {
            this.setState({counterValue: 0})
        } else {
            this.setState({counterValue: this.props.initValue})
        }
    }
    
    
    render() {
        console.log(this.props);
        return(
            <div className='counter'>
                <Display counterCurrentValue={this.state.counterValue}/>
                <ButtonsPanel changeValue={this.addOne} resetValue={this.reset} />
                <Step updateStepTyping={this.updateStep}  stepValue={this.state.stepValue}/>
            </div>
        );
    }
}

export default Counter;