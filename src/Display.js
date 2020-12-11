import React from 'react';
import './Display.css';

function Display(props) {

    return(

        <p>Licznik: {props.counterCurrentValue}</p>
        
    );
}

export default Display;