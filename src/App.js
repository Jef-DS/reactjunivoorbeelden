import React, { Component } from 'react';
import CategorieList, { Categorie } from './vb2';


class App extends Component {
  static categorieen = [
    new Categorie("PL", "Programmeertalen"),
    new Categorie("OS", "Besturingssystemen"),
    new Categorie("DB", "Databanken")
  ];
  constructor(props) {
    super(props);
    this.state = {
      categorieen: []
    }
    //omdat we geen arrow functie hebben gebruikt, moeten we 'this' koppelen aan de functie
    this.intervalID = setInterval(this.aanpassen.bind(this), 5000);
  }
  aanpassen() {
    console.log("Lijst wordt aangepast");
    const numitems = this.state.categorieen.length;

    this.setState({ categorieen: this.state.categorieen.concat(App.categorieen[numitems]) });
    //dit werkt alleen omdat de functie wordt aangeroepen via setInterval
    //normaal is this.setState() asynchroon. Iets met this.state doen na this.setState()
    //is een antipattern. 
    if (this.state.categorieen.length === App.categorieen.length){ 
      clearInterval(this.intervalID)
    }
  }
  componentDidMount() {
    console.log("App is geladen");
  }
  componentWillUnmount() {
    console.log("App wordt ontladen");
  }
  componentDidUpdate() {
    console.log("App is geüpdated");
  }
  render() {

    return (
      <CategorieList categorieen={this.state.categorieen} />
    );
  }
}

export default App;
