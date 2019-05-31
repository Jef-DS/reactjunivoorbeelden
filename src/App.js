import React, { Component } from 'react';
import {Categorie} from './vb2';
import InputForm from './vb5';



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
    this.setState({ 
     categorieen: this.state.categorieen.concat(App.categorieen[numitems]),
     enabled: numitems < App.categorieen.length-1
    });
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
      <InputForm />
    );
  }
}

export default App;
