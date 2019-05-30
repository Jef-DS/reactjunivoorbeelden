// (1)
import React, { PureComponent } from 'react';
// (2)
//import React, {Component} from 'react';
import PropTypes from 'prop-types';

// (1)
/*
 * PureComponent controleert of de component gewijzigd is
 */
export default class CategorieItem extends PureComponent {
// (2)
//export default class CategorieItem extends Component {
    componentDidMount(){
        console.log(`CategorieItem is geladen: ${this.props.categorieId}`);
      }
      componentWillUnmount(){
        console.log("CategorieItem wordt ontladen");
      }
      componentDidUpdate(){
        console.log(`CategorieItem is geüpdated: ${this.props.categorieId}`);
      }
    
    render() {
        const ddStyle = { marginLeft: '16px' }
        return (
            <div className="list-group-item">
                <dt>{this.props.categorieId}</dt>
                <dd style={ddStyle}>{this.props.categorieNaam}</dd>
            </div>
        );
    }
}
CategorieItem.propTypes = {
    categorieId: PropTypes.string.isRequired,
    categorieNaam: PropTypes.string.isRequired
}