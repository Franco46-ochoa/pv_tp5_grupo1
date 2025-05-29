import { useParams, Link } from 'react-router-dom';
import { useAlumnos } from './AlumnosContext';

const DetalleAlumno = () => {
  const { id } = useParams();
  const { alumnos } = useAlumnos();

  const alumno = alumnos.find((a) => a.id === id);

  if (!alumno) {
    return <p>Alumno no encontrado.</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Detalle del Alumno</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>LU:</strong> {alumno.id}</li>
        <li className="list-group-item"><strong>Nombre:</strong> {alumno.nombre}</li>
        <li className="list-group-item"><strong>Apellido:</strong> {alumno.apellido}</li>
        <li className="list-group-item"><strong>Curso:</strong> {alumno.curso}</li>
        <li className="list-group-item"><strong>Email:</strong> {alumno.email}</li>
        <li className="list-group-item"><strong>Domicilio:</strong> {alumno.domicilio}</li>
        <li className="list-group-item"><strong>Teléfono:</strong> {alumno.telefono}</li>
      </ul>
      <Link to="/alumnos" className="btn btn-secondary mt-4">← Volver a la lista</Link>
    </div>
  );
};

export default DetalleAlumno;
