import React, { Component } from 'react';
import OpleidingForm,{Categorie} from './vb7';



class App extends Component {
  //opgelet: definitie van de Categorie class is gewijzigd in vb7
  static categorieen = [
    new Categorie("PL", "Programmeertalen"),
    new Categorie("OS", "Besturingssystemen"),
    new Categorie("DB", "Databanken")
  ];


  // gewijzigde data 'vloeit' terug naar hier
  handleSubmit= (id, naam, categorieen) => {
    console.log(id, naam, categorieen);
  }
  render() {

    return (
      <OpleidingForm className="m-2" opties={App.categorieen}
                    onSubmit={this.handleSubmit} />
    );
  }
}

export default App;
