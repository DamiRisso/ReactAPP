import React from 'react';
import productos from './productos'
import ItemDetail from './ItemDetail'

const getItems = new Promise ((result, reject) => setTimeout(() => result(productos), 2000))    

const ItemDetailContainer = ()=> {
    return(
        <>
        <ItemDetail />
        </>
    )
}

export default ItemDetailContainer;