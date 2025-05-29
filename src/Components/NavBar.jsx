import React from 'react'
import { Link } from 'react-router-dom';
import  '../Styles/Styles.css'


const NavBar = () => {
  return (
    <nav className='NavBar'>       
        <div className='Botones'>
            <Link to="/">Inicio</Link>
            <Link to="/alumnos/nuevo">Nuevo Alumno</Link>
            <Link to="/alumnos">Lista</Link>
            <Link to="/Acerca">Acerca</Link>
        </div>
    </nav>
  )
}

export default NavBar