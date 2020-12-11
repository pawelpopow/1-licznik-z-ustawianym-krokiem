import React from 'react';
import './Step.css'

const Step = (props) => {

    return(
        <div className="form">
             <form>
            <label>
                Krok:
                <input type="number" min="1" value={props.stepValue} onChange={props.updateStepTyping}></input>        
            </label>
          </form>
            
        </div>
    )
}

export default Step;