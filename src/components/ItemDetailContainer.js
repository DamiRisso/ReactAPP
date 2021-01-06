import React from 'react';
//import productos from './productos'
import ItemDetail from './ItemDetail'
//import products from './products.json'

//const getItems = new Promise ((result, reject) => setTimeout(() => result(productos), 2000))    



const ItemDetailContainer = () => {

    const [data, setData] = React.useState([])
    

    React.useEffect(()=>{
        const fetchDetalles = fetch('./Data/dataProducts.json')
        fetchDetalles
        .then((results) => {
            if (results.status === 200 ) {
            let stringified = JSON.stringify(results);
            let resultado = JSON.parse(stringified);
                return resultado
            }
        })
        .then((results)=>{
            setTimeout(() => {
                setData(results)
            }, 600);
        })
    }, [])
    
    return(
        <>
            {data.map(productos =>          

<ItemDetail key={productos.codigo}                             

nombre={productos.nombre}                

descripcion={productos.descripcion}               

stock={productos.stock}  

peso={productos.peso}

productor={productos.productor}

precio={productos.precio}

codigo={productos.codigo}

categoria={productos.categoria}

/>        )}
        </>
    )

}

            
export default ItemDetailContainer;