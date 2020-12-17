import React from 'react';

const ItemCount = ({stock, initial}) => {
	const [valor, setValor] = React.useState(parseInt(initial))

    const sumar = () =>{
        if(parseInt(stock) === 0) {
            alert("Este producto no esta en stock")
        } 
        else if (valor < stock){
            setValor(valor + 1)
        } else {
            setValor(valor)
        }
    }

    const restar = () =>{
        if (parseInt(stock) === 0 ){alert("Este producto no esta en stock")}
        else if(valor > initial){setValor(valor -1)}
        else{setValor(valor)}
    }

		return(
		<div className="ItemCount">
		<p>{valor}</p>
		<button className="btn btn-outline-success" onClick={sumar}>+</button>
		<button className="btn btn-outline-danger" onClick={restar}>-</button>
		</div>
	)
}

export default ItemCount;