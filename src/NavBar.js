import React from 'react';
import logoAldeaOrganica from './logo_aldeaorganica.png';

function NavBar() {
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
   <a className="navbar-brand" href="index.html">
    <img src={logoAldeaOrganica} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
    Aldea Organica
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a class="nav-link active" href="index.html">¿Quienes Somos?</a>
      <a className="nav-link" href="index.html">¿Como comprar?</a>
      <a className="nav-link" href="index.html">Productos</a>
    </div>
  </div>
</nav>
  );
}

export default NavBar;
