import React, { Component } from 'react';
import CategorieList, { Categorie } from './vb4';


class App extends Component {
  static categorieen = [
    new Categorie("PL", "Programmeertalen"),
    new Categorie("OS", "Besturingssystemen"),
    new Categorie("DB", "Databanken")
  ];
  constructor(props) {
    super(props);
    this.state = {
      categorieen: [],
      enabled: true
    }
  }
  aanpassen = () => {
    console.log("Lijst wordt aangepast");
    const numitems = this.state.categorieen.length;

    this.setState({ categorieen: this.state.categorieen.concat(App.categorieen[numitems]) });
    //dit werkt niet meer omdat this.state.categorieen nog niet is aangepast. 
    if (this.state.categorieen.length === App.categorieen.length){ 
     this.setState({enabled: false});
    }
    //dit werkt, maar dat is niet altijd het geval. Tweemaal de state aanpassen in 1 functie
    //is ook een antipattern
    //if (numitems === App.categorieen.length-1){
    //  this.setState({enabled: false});
    //}
    //Dit is de beste oplossing
    //this.setState({ 
    //  categorieen: this.state.categorieen.concat(App.categorieen[numitems]),
    //  enabled: numitems < App.categorieen.length-1
    // });
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
      <CategorieList categorieen={this.state.categorieen} handler={this.aanpassen} buttonEnabled={this.state.enabled} />
    );
  }
}

export default App;
