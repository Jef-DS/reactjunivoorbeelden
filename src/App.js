import React, { Component } from 'react';
import OpleidingForm from './vb8';
import {CategorieContext, Categorie} from './CategorieContext';



class App extends Component {

  // gewijzigde data 'vloeit' terug naar hier
  handleSubmit = (id, naam, categorieen) => {
    console.log(id, naam, categorieen);
  }
  render() {

    return (
      //CategorieContext(CategorieContext.js) definieert een globale waarde die in alle childcomponenten
      //toegankelijk is 
      <CategorieContext.Provider value={[
        new Categorie("PL", "Programmeertalen"),
        new Categorie("OS", "Besturingssystemen"),
        new Categorie("DB", "Databanken")
      ]}>
        <OpleidingForm className="m-2" 
          onSubmit={this.handleSubmit} />
      </CategorieContext.Provider>
    );
  }
}

export default App;
