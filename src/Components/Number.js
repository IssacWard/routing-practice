import React from 'react';

const Number = props => {
    
    return (
        isNaN(props.id) ? 
        <h1 style={{backgroundColor:props.color, color:props.color2}}>The word is: {props.id}</h1> :
        <h1 style={{backgroundColor:props.color, color:props.color2}}>The number is: {props.id}</h1>
    );
}

export default Number;