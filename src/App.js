import React from 'react';
import CategorieItem from './vb1';


function App()  {
  return (
      //HTML tags(div) met een kleine letter, JSX componenten met een hoofdletter
      <div className="list-group">
        <CategorieItem categorieId="PL" categorieNaam="Programmeertalen"/>
      </div>
    );
}

export default App;
