import React, { useState, useEffect } from 'react';

const Counter = props => {

    // Use State para mantener un estado
    const [counter, setCounter] = useState(props.initialValue);

    // Con esto simulamos los componentes componentDidMount si incluimos valores en el array de dependencias
    useEffect(() => {
        console.log('El componente se ha montado, useEffect');

        // Para crear el componente de ComponentDidUnMount es el return de la callback
        return () => {
            console.log('El componente se ha desmontado, useEffect');
        }
    }, []);

    // componentDidUpdate, si no pasamos las dependencias el array con lo cual cualquier cambio de las 
    // propiedades ejecutaria la callback de useEffect
    useEffect(() => {
        console.log('El componente se ha actualizado, useEffect');
    });


    // Funciones propias del componente
    const incremento = () => {
        setCounter(counter + props.step);
    }
    const decremeto = () => {
        if (counter > 0) {
            setCounter(counter - props.step)
        }
    }

    // Componente a renderizar
    return (
        <div>
            <div>{counter}</div>
            <button onClick={decremeto}>Decremento - - </button>
            <button onClick={incremento} >Incremento + + </button>
        </div>

    )
}

export default Counter;