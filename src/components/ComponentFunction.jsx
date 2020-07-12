import React, { useState } from 'react';

const Counter = props => {

    const [counter, setCounter] = useState(props.initialValue);

    const incremento = () => {
        setCounter(counter + props.step);
    }

    const decremeto = () => {
        if (counter > 0) {
            setCounter(counter - props.step)
        }
    }


    return (
        <div>
            <div>{counter}</div>
            <button onClick={decremeto}>Decremento - - </button>
            <button onClick={incremento} >Incremento + + </button>
        </div>

    )
}

export default Counter;