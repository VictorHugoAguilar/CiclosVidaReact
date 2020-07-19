import React, { Component } from 'react';
import './UserForms.scss';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', genero: '' }
        this.emailInput = React.createRef();
    }

    componentDidMount() {
        // console.log(this.emailInput.current);
        this.emailInput.current.focus();
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeSelect = e => {
        this.setState({
            [e.target.name]: e.target.selectedOptions[0].value
        });
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form className="userForm"
                onSubmit={this.handleSubmit} >
                <input type="email"
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Introduce tu mail"
                    ref={this.emailInput}
                />
                <br />
                <select name="genero"
                    value={this.state.genero}
                    onChange={this.handleChangeSelect} >
                    <option value="hombre" > Hombre </option>
                    <option value="mujer" > Mujer </option>
                </select>
                <br />
                <button type="submit" > Registrarse </button>
            </form>
        );
    }
}
export default UserForm;