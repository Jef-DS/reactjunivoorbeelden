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
    componentDidMount() {
        console.log("CategorieLijst is geladen");
    }
    componentWillUnmount() {
        console.log("CategorieLijst wordt ontladen");
    }

    componentDidUpdate() {
        console.log("CategorieLijst is geüpdated");
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-info" 
                            onClick={this.props.handler} 
                            disabled={!this.props.buttonEnabled}>Categorie toevoegen</button>
                </div>
                <dl className="col-8 list-group">
                    {this.props.categorieen.map(item => {
                        return <CategorieItem key={item.id} categorieId={item.id} categorieNaam={item.naam} />
                    })}
                </dl>
            </div>
        );
    }
}
CategorieLijst.propTypes = {
    categorieen: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            naam: PropTypes.string.isRequired
        })
    ).isRequired,
    handler: PropTypes.func.isRequired,
    buttonEnabled: PropTypes.bool.isRequired
}
export default CategorieLijst;