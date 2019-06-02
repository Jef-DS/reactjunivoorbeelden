import React, {Component} from 'react';
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
                        {this.props.opties.map(item => {
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

export class Categorie {
    constructor(key, value) {
        this.key = key;
        this.value = value;
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
        const opties = this.props.opties;
        return (
            <form onSubmit={this.handleSubmit}>
                <TekstInputVeld item={idItem} onChange={this.handleChange} />
                <TekstInputVeld item={naamItem} onChange={this.handleChange} />
                <SelectInputVeld item={categorieItem} opties={opties} onChange={this.handleChange} />
                <input type="submit" value="Verzenden"/>
            </form>
        )
    }
}