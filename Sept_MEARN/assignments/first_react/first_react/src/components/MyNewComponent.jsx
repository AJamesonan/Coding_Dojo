import React, { useState } from 'react';

const PersonCard = props => {
    const [state, setState] = useState({
        clickCount: props.age
    });

    const addYear = () =>{
        setState({
            clickCount: state.clickCount+1
        });
    }
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>age: {state.clickCount} <button onClick={addYear} >Birthday button</button></p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}

export default PersonCard;

