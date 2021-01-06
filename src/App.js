import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {



  return (
   <>
   <NavBar />
   <ItemListContainer saludo='Bienvenidos a nuestra Tienda'/>
   <ItemCount stock='10' initial='1'/>
   <ItemDetailContainer />
   </>
  );
}

export default App;
