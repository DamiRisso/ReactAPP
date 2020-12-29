//Componente Item.js:
import React from 'react';

const Item = ({nombre, descripcion, peso, precio, productor, stock, codigo, categoria}) => {

    const widthCard = {width: '18rem'}
    return(
       
      <div class="card" style={widthCard}>
  <div class="card-header">
    {categoria}
  </div>
  <div class="card-body">
    <h5 class="card-title">{nombre}</h5>
    <p class="card-text">{peso}Kg</p>
    <button class="btn btn-primary">Ver detalles</button>
  </div>
</div>
      /*<>        
<div className="card" id={`prod-${codigo}`} style={widthCard}>
  <img src={`IMAGENES/producto_${codigo}.jpg`} className="card-img-top" alt="..."  />
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">{descripcion}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{peso}Kg</li>
    <li className="list-group-item">{productor}</li>
    <li className="list-group-item">${precio}</li>
  </ul>
  <div className="card-body">
    <button className="btn btn-primary">Añadir al carrito</button>
  </div>
</div> 
</>*/);
}

export default Item;
	