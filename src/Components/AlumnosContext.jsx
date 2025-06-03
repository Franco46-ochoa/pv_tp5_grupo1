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
    {
      id: 'APU006358',
      nombre: 'Franco Luciano Emmanuel ',
      apellido: 'Ochoa',
      curso: 'Segundo',
      email: '46323573@fi.unju.edu.ar',
      domicilio: 'B°3 de Agosto Los Huaicos',
      telefono: '3885177976',
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
export { AlumnosProvider, useAlumnos};
