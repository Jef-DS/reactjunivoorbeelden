import React from 'react';
import CategorieList,{Categorie} from './vb2';


function App()  {
  //Categorie is gedefinieerd in vb2.js
  const categorieen = [
    new Categorie("PL", "Programmeertalen"),
    new Categorie("OS", "Besturingssystemen"),
    new Categorie("DB", "Databanken")
  ];
  return (
      <CategorieList categorieen={categorieen}/>
    );
}

export default App;
