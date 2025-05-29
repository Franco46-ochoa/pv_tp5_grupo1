import { createContext, useContext, useState } from 'react';

const AlumnosContext = createContext();

const AlumnosProvider = ({ children }) => {
  const [alumnos, setAlumnos] = useState([
    {
      id: 'APU00999',
      nombre: 'María Eugenia',
      apellido: 'Diaz',
      curso: 'Tercero',
      email: 'mariadiaz@mail.com',
      domicilio: 'Av. Congreso 125',
      telefono: '3884895999',
    },
  ]);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  const editarAlumno = (id, datosActualizados) => {
    setAlumnos(alumnos.map(a => (a.id === id ? datosActualizados : a)));
  };

  const eliminarAlumno = (id) => {
    setAlumnos(alumnos.filter(a => a.id !== id));
  };

  return (
    <AlumnosContext.Provider value={{ alumnos, agregarAlumno, editarAlumno, eliminarAlumno }}>
      {children}
    </AlumnosContext.Provider>
  );
};

const useAlumnos = () => useContext(AlumnosContext);
export { AlumnosProvider, useAlumnos };
