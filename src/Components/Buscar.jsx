import { useState } from 'react';
import { useAlumnos } from './AlumnosContext';

const BuscarAlumno = () => {
  const { alumnos } = useAlumnos();
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleBuscar = () => {
    const termino = terminoBusqueda.trim().toLowerCase();
    const coincidencias = alumnos.filter((a) =>
      a.nombre.toLowerCase().includes(termino) ||
      a.apellido.toLowerCase().includes(termino) ||
      a.telefono.includes(termino)
    );
    setResultados(coincidencias);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Buscar Alumno</h2>
      <div className="mb-3">
        <label className="form-label">Nombre, Apellido o Teléfono</label>
        <input
          type="text"
          className="form-control"
          value={terminoBusqueda}
          onChange={(e) => setTerminoBusqueda(e.target.value)}
          placeholder="Ingrese término de búsqueda"
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleBuscar}>
        Buscar
      </button>

      {resultados.length > 0 ? (
        resultados.map((alumno) => (
          <div className="card p-3 mb-2" key={alumno.id}>
            <h5>{alumno.nombre} {alumno.apellido}</h5>
            <p><strong>LU:</strong> {alumno.id}</p>
            <p><strong>Curso:</strong> {alumno.curso}</p>
            <p><strong>Email:</strong> {alumno.email}</p>
            <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
            <p><strong>Teléfono:</strong> {alumno.telefono}</p>
          </div>
        ))
      ) : terminoBusqueda !== '' ? (
        <p className="text-danger">No se encontraron alumnos.</p>
      ) : null}
    </div>
  );
};

export default BuscarAlumno;
