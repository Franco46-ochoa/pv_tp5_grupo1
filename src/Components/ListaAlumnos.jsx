import { useAlumnos } from './AlumnosContext';
import { Link } from 'react-router-dom';
import '../styles/NuevoAlumno.css';

const ListaAlumnos = () => {
  const { alumnos } = useAlumnos();

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Lista de Alumnos</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.curso}</td>
              <td>
                <Link to={`/alumnos/${alumno.id}`} className="btn btn-sm btn-outline-primary me-2">Ver</Link>
                <Link to={`/alumnos/${alumno.id}/editar`} className="btn btn-sm btn-outline-secondary me-2">Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaAlumnos;
