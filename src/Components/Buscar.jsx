import { useState } from 'react';
import { useAlumnos } from './AlumnosContext';

const BuscarAlumno = () => {
  const { alumnos } = useAlumnos();
  const [idBuscado, setIdBuscado] = useState('');
  const [alumnoEncontrado, setAlumnoEncontrado] = useState(null);

  const handleBuscar = () => {
    const resultado = alumnos.find(a => a.id === idBuscado);
    setAlumnoEncontrado(resultado || null);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Buscar Alumno por LU</h2>
      <div className="mb-3">
        <label className="form-label">LU</label>
        <input
          type="text"
          className="form-control"
          value={idBuscado}
          onChange={(e) => setIdBuscado(e.target.value)}
          placeholder="Ingrese LU"
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleBuscar}>
        Buscar
      </button>

      {alumnoEncontrado ? (
        <div className="card p-3">
          <h5>{alumnoEncontrado.nombre} {alumnoEncontrado.apellido}</h5>
          <p><strong>Curso:</strong> {alumnoEncontrado.curso}</p>
          <p><strong>Email:</strong> {alumnoEncontrado.email}</p>
          <p><strong>Domicilio:</strong> {alumnoEncontrado.domicilio}</p>
          <p><strong>Teléfono:</strong> {alumnoEncontrado.telefono}</p>
        </div>
      ) : idBuscado !== '' ? (
        <p className="text-danger">Alumno no encontrado.</p>
      ) : null}
    </div>
  );
};

export default BuscarAlumno;
