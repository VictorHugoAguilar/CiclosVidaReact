import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            counter : this.props.initialValue
        };
    }

    // Método que se ejecutar cuando se monta el componente
    componentDidMount() {
        console.info('El counter se ha montado');
    }

    // Método que se ejecuta cuando se acualiza el estado
    componentDidUpdate(prevProps, prevState){
        console.info('Se ha actualizado el componente');
        console.log(' /******** prevState ***********/ ');
        console.log('Valor actualizado a ', this.state.counter);
        console.log('Valor del state anterior', prevState.counter);
        console.log(' /******** prevProps ***********/ ');
        console.log('Valor del props anterior', prevProps);
    }

    //Método que se ejecuta cuando se demonta un componente
    componentWillUnmount(){
        console.log('El componente se ha eliminado del DOM');
    }

    // Funciones propias de la clase
    incremento() {
        this.setState({ counter: this.state.counter + this.props.step });
    }
    decremeto( ) {
        if(this.state.counter > 0){
            this.setState({ counter: this.state.counter - this.props.step  >= 0 ? this.state.counter - this.props.step : this.state.counter});
        }
    }


    // Renderizar componente
    render() {
        return (
            <div>
               <div>{this.state.counter}</div>
                <button onClick={()=>this.decremeto()}>Decremento - - </button>
                <button onClick={ () => this.incremento()} >Incremento + + </button>
            </div>

        )
    }

    
}

export default Counter;