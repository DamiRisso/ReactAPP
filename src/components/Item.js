//Componente Item.js:
import React from 'react';
import ItemList from './ItemList'

const Item = ({item}) => {
    return(
        <>
        <p className="Item">{item}</p>
        </>
    )
}

export default Item;
	