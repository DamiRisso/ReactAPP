import React from 'react';
import ItemList from './ItemList';

	/*let productos = [
		"producto 1",
		"producto 2",
		"producto 3",
		"producto 4"
		  ];*/
const ItemListContainer = ({saludo}) => {


	return (
	<>
	<h2 className='saludo'>{saludo}</h2>
	<ItemList />
	</>
	)
}

export default ItemListContainer;
