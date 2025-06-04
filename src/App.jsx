import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Styles/Styles.css'
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ListaAlumnos from './Components/ListaAlumnos';
import DetalleAlumno from './Components/DetalleAlumno';
import NuevoAlumno from './Components/NuevoAlumno';
import EditarAlumno from './Components/EditarAlumnos';
import BuscarAlumno from './Components/Buscar';
import Acerca from './Components/Acerca';


function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/alumnos' element={<ListaAlumnos/>} />
        <Route path="/alumnos/:id" element={<DetalleAlumno />} />
        <Route path="/alumnos/nuevo" element={<NuevoAlumno />} />
        <Route path="/alumnos/:id/editar" element={<EditarAlumno />} />
        <Route path="/buscar" element={<BuscarAlumno/>} />
        <Route path="/acerca" element={<Acerca/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

