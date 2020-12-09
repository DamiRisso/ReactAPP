import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
   <>
   <NavBar />
   <ItemListContainer saludo='Bienvenidos a nuestra Tienda'/>
   </>
  );
}

export default App;
