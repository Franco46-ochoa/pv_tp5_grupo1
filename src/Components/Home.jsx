import React from 'react'
import  '../Styles/Styles.css';

function Home() {
  return (
    <div className='Bienvenida'>
      <div className='Titulo_home'>Bienvenidos a FIPA</div>
      <div className='descripcion_home'>Este sistema esta diseñado para registrar y consultar la información personal de alumnos de forma simple y segura.</div>
      <ul className='descripcion_list'>
        <li> Registrar nuevo alumno</li>
        <li> Consultar lista de alumnos y modificarlo</li>
        <li> Acerca los creadores de la pagina</li>
      </ul>
    </div>
    
  )
}

export default Home