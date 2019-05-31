import React, { Component } from 'react';
import {Categorie} from './vb2';
import CategorieForm from './vb6';



class App extends Component {
  static categorieen = [
    new Categorie("PL", "Programmeertalen"),
    new Categorie("OS", "Besturingssystemen"),
    new Categorie("DB", "Databanken")
  ];
  constructor(props) {
    super(props);
    this.state = {
      initialId: '',
      initialNaam: ''
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
  // gewijzigde data 'vloeit' terug naar hier
  handleSubmit= (id, naam) => {
    alert(`id=${id}, naam=${naam}`);
    // reset inputvelden
    this.setState({initialId:'', initialNaam:''});
  }
  render() {

    return (
      <CategorieForm className="m-2" initialId={this.state.initialId} initialNaam={this.state.initialNaam} 
                     onSubmit={this.handleSubmit}/>
    );
  }
}

export default App;
