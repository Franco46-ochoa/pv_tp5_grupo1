import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAlumnos } from './AlumnosContext';
import '../styles/NuevoAlumno.css'; // Reutilizás estilos del formulario

const EditarAlumno = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { alumnos, editarAlumno } = useAlumnos();

  const alumnoOriginal = alumnos.find(a => a.id === id);

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (alumnoOriginal) {
      setFormData(alumnoOriginal);
    }
  }, [alumnoOriginal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editarAlumno(id, formData);
    alert('Alumno editado con éxito');
    navigate('/alumnos');
  };

  if (!formData) return <p>Cargando datos del alumno...</p>;

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h2 className="mb-4 text-primary">Editar Alumno</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">LU</label>
                  <input type="text" name="id" className="form-control" value={formData.id} readOnly />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido</label>
                  <input type="text" name="apellido" className="form-control" value={formData.apellido} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Curso</label>
                  <input type="text" name="curso" className="form-control" value={formData.curso} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Domicilio</label>
                  <input type="text" name="domicilio" className="form-control" value={formData.domicilio} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                  <label className="form-label">Teléfono</label>
                  <input type="text" name="telefono" className="form-control" value={formData.telefono} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-success w-100">Guardar Cambios</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarAlumno;
