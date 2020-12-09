import React from 'react';
import CartIcon from '../images/shopping-cart-solid.svg';

const CartWidget = () => {
	return (
		<>
		<img src={CartIcon} alt="Carrito" className='imagenCarrito'/>
		</>
		)
}

export default CartWidget;