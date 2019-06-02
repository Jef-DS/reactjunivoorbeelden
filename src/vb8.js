import React, {Component} from 'react';
import {CategorieContext, Categorie} from './CategorieContext';
class TekstInputVeld extends Component {
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
class SelectInputVeld extends Component {
    //Bepaal welke context we willen gebruiken
    //de value is toegankelijk via this.context
    static contextType = CategorieContext;
    handleChange = (event) => {
        //we bepalen de waarden aan de hand van het selected-attribuut
        const waarden = [ ...event.target.options].filter(o => o.selected).map(o => o.value);
        this.props.onChange(event.target.name, waarden);
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.item.naam}>{this.props.item.naam}</label>
                <select className="form-control"
                        name={this.props.item.naam}
                        id={this.props.item.naam}
                        multiple
                        value={this.props.item.waarde}
                        onChange={this.handleChange}>
                            {/* this.context bevat de lijst van opties */}
                        {this.context.map(item => {
                            return (
                                    <option value={item.key} key={item.key}>
                                           {item.value}
                                    </option>)
                        })}
                </select>
            </div>
        )
    }
}


export default class OpleidingForm extends Component {
    static categorieen = [
        new Categorie("PL", "Programmeertalen"),
        new Categorie("OS", "Besturingssystemen"),
        new Categorie("DB", "Databanken")
      ];
    componentDidMount() {
        console.log("OpleidingForm is geladen");
    }
    componentWillUnmount() {
        console.log("OpleidingForm wordt ontladen");
    }
    componentDidUpdate() {
        console.log("OpleidingForm is geüpdated");
    }
    constructor(props){
        super(props);
        this.state = {
            id: "",
            naam: "",
            categorieen:  []
        }
    }
    handleChange = (naam, waarde) => {
        this.setState({ [naam]: waarde });
    }
    handleSubmit = (event) => {
        this.props.onSubmit(this.state.id, this.state.naam, this.state.categorieen);
        event.preventDefault();
    }
    render() {
        const idItem = { naam: "id", waarde: this.state.id };
        const naamItem = { naam: "naam", waarde: this.state.naam };
        const categorieItem = {naam: "categorieen", waarde: this.state.categorieen};
        return (
            <form onSubmit={this.handleSubmit} className={this.props.className}>
                <TekstInputVeld item={idItem} onChange={this.handleChange} />
                <TekstInputVeld item={naamItem} onChange={this.handleChange} />
                {/* we geven geen opties meer door */}
                <SelectInputVeld item={categorieItem} onChange={this.handleChange} />
                <input type="submit" value="Verzenden"/>
            </form>
        )
    }
}