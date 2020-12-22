import React from 'react';
import ItemList from './ItemList';

	/*let productos = [
		"producto 1",
		"producto 2",
		"producto 3",
		"producto 4"
		  ];*/
const ItemListContainer = ({saludo}) => {

		
		  //const[items, setItems] = React.useState(productos)

	return (
	<div>
	<h2 className='saludo'>{saludo}</h2>
	<ItemList />
	</div>)
}

export default ItemListContainer;
