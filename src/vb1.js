import React from 'react';
import PropTypes from 'prop-types';

// Een JSX-component die alleen een render()-functie nodig heeft
// kan ook als function gedefinieerd worden.
// Dit is een voorbeeld van een stateless component
export default function CategorieItem(props) {
    // Een style moet als object gedeclareerd worden
    // CSS-namen worden omgezet naar 'camelCase'
    const ddStyle = { marginLeft: '16px' }
    return (
        <div className="list-group-item">
            <dt>{props.categorieId}</dt>
            {/* We hadden natuurlijk ook className="ml-3" kunnen gebruiken*/}
            <dd style={ddStyle}>{props.categorieNaam}</dd>
        </div>
    );
}
CategorieItem.propTypes = {
    categorieId: PropTypes.string.isRequired,
    categorieNaam: PropTypes.string.isRequired
}