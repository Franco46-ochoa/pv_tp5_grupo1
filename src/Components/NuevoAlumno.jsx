import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlumnos } from './AlumnosContext';
import '../styles/NuevoAlumno.css';

const NuevoAlumno = () => {
  const { agregarAlumno } = useAlumnos();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarAlumno(formData);
    alert('Alumno agregado correctamente');
    navigate('/alumnos');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5" style={{ backgroundColor: '#fff0f5' }}>
              <h2 className="text-center mb-4 text-danger">Nuevo Alumno</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">LU</label>
                  <input
                    type="text"
                    name="id"
                    className="form-control"
                    value={formData.id}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    className="form-control"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Curso</label>
                  <input
                    type="text"
                    name="curso"
                    className="form-control"
                    value={formData.curso}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Domicilio</label>
                  <input
                    type="text"
                    name="domicilio"
                    className="form-control"
                    value={formData.domicilio}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="text"
                    name="telefono"
                    className="form-control"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-danger w-100">Guardar Alumno</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoAlumno;
