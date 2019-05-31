import React, { Component } from 'react';
class TekstInputVeld extends Component {
    componentDidMount() {
        console.log(`TekstInputVeld ${this.props.item.naam} is geladen`);
    }
    componentWillUnmount() {
        console.log(`TekstInputVeld ${this.props.item.naam} wordt ontladen`);
    }
    componentDidUpdate() {
        console.log(`TekstInputVeld ${this.props.item.naam} is geüpdated`);
    }
    //behandelt lokale wijzigingen door ze te versturen naar de parentform
    handleChange = (event) => {
        this.props.onChange(event.target.name, event.target.value);
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.item.naam}>{this.props.item.naam}</label>
                <input className="form-control"
                    value={this.props.item.waarde}
                    name={this.props.item.naam}
                    onChange={this.handleChange} />
            </div>
        )
    }
}

/*
 * CategorieForm bevat de totale state van de form
 * We kunnen een initiele waarde meegeven voor id en naam
 */
export default class CategorieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.initialId || "", //default is lege string
            naam: props.initialNaam || ""
        }
    }
    componentDidMount() {
        console.log("CategorieForm is geladen");
    }
    componentWillUnmount() {
        console.log("CategorieForm wordt ontladen");
    }
    componentDidUpdate() {
        console.log("CategorieForm is geüpdated");
    }
    //Wijziging in inputveld
    handleChange = (naam, waarde) => {
        //Voorbeeld van callback die wordt uitgevoerd na setState()
        this.setState({ [naam]: waarde }, () => console.log(this.state));
    }
    //informatie doorsturen naar parent
    handleSubmit = (event) => {
        this.props.onSubmit(this.state.id, this.state.naam);
        event.preventDefault(); // geen roundtrip naar server
    }
    render() {
        const idItem = { naam: "id", waarde: this.state.id };
        const naamItem = { naam: "naam", waarde: this.state.naam };
        return (
            <form className={this.props.className} onSubmit={this.handleSubmit}>
                <TekstInputVeld item={idItem} onChange={this.handleChange} />
                <TekstInputVeld item={naamItem} onChange={this.handleChange} />
                <input type="submit" value="versturen" />
            </form>
        )
    }
}