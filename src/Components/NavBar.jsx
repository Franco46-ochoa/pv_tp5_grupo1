import React from 'react'
import { Link } from 'react-router-dom';
import  '../Styles/Styles.css'


const NavBar = () => {
  return (
    <nav className='NavBar'>       
        <div className='Botones'>
            <Link to="/">Inicio</Link>
            <Link to="/Nuevo">Nuevo</Link>
            <Link to="/Lista">Lista</Link>
            <Link to="/Acerca">Acerca de</Link>
        </div>
    </nav>
  )
}

export default NavBar