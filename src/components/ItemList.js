//Componente ItemList.js:
import React from 'react';
import Item from './Item'
import productos from './productos'

    
const listProductos = new Promise ((result, reject) => setTimeout(() => result(productos), 2000))    


const ItemList =() => {

    const [list, setList] = React.useState([productos]);     

  React.useEffect(() => listProductos.then(setList), []);

    return(    

<>        
    {list.map(productos =>          

		   <Item key={productos.codigo}                             

		 nombre={productos.nombre}                

		descripcion={productos.descripcion}               

         stock={productos.stock}  
         
         peso={productos.peso}

         productor={productos.productor}

         precio={productos.precio}

		 codigo={productos.codigo}
		 
		 categoria={productos.categoria}

 />        )}    

</>)}


 
export default ItemList;