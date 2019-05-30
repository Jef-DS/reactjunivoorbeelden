import React, { Component } from 'react';
import CategorieItem from './vb1';
import PropTypes from 'prop-types';

export class Categorie {
    constructor(id, naam) {
        this.id = id;
        this.naam = naam;
    }
}
class CategorieLijst extends Component {
    componentDidMount(){
        console.log("CategorieLijst is geladen");
      }
      componentWillUnmount(){
        console.log("CategorieLijst wordt ontladen");
      }

      componentDidUpdate(){
        console.log("CategorieLijst is geüpdated");
      }
    
    render() {
        return (
            <dl className="list-group">
                {this.props.categorieen.map(item => {
                    // in een lijst moet elk item een unieke key hebben.
                    return <CategorieItem key={item.id} categorieId={item.id} categorieNaam={item.naam} />
                    //return <CategorieItem categorieId={item.id} categorieNaam={item.naam} />
                })}
            </dl>
        );
    }
}
CategorieLijst.propTypes = {
    categorieen: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            naam: PropTypes.string.isRequired
        })
    ).isRequired
}
export default CategorieLijst;