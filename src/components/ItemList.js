//Componente ItemList.js:
import React from 'react';
import Item from './Item'


    
const ItemList = () => {
let productos = [
    "Producto 1",
    "Producto 2",
    "Producto 3",
    "Producto 4"
      ];
    const[items, setItems] = React.useState(productos)
    return(
    <>
     {
         /*  setTimeout(()=> {
            items.map((elemento, indice)=>{
                return <Item item={elemento} /> 
            })
         },2000)*/

            items.map((elemento, indice)=>{
                return <Item item={elemento} /> 
            })
 
     }   
   
    </>
    )
}
export default ItemList;