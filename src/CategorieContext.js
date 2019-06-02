import React from 'react';
export class Categorie {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
export const CategorieContext = React.createContext();