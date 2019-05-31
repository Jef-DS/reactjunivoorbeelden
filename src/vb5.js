import React, { Component } from 'react';
export default class InputForm extends Component {
    constructor(props) {
        super(props);
        //aangezien de tekst kan veranderen, behoort die in 'state'
        this.state = {
            id: "",
            naam: ""
        }
    }
    componentDidMount() {
        console.log("InputForm is geladen");
    }
    componentWillUnmount() {
        console.log("InputForm wordt ontladen");
    }
    componentDidUpdate() {
        console.log("InputForm is geüpdated");
    }

    // (1) arrow functie zodat we 'this' niet moeten koppelen
    // (2) we maken gebruik van de 'name'-property om de waarde op de juiste key te koppelen
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <form className="m-2">
                <div className="form-group">
                    <label htmlFor="id">Id</label>
                    { /* handleChange verandert de state zodat de value aangepast wordt */}
                    <input type="text" onChange={this.handleChange}
                        className="form-control"
                        id="id" name="id"
                        value={this.state.id} />
                </div>
                <div className="form-group">
                    <label htmlFor="naam">Naam</label>
                    <input type="text" onChange={this.handleChange}
                        className="form-control"
                        id="naam" name="naam"
                        value={this.state.naam} />
                </div>
                <input type="button" className="btn btn-primary" value="Verzenden" />
            </form>
        );
    }
}