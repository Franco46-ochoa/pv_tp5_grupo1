import React from 'react';
import '../styles/Styles.css'; // ajustá según tu ruta real

const Acerca = () => {
  return (
    <div className="acerca-container">
      <h2 className="acerca-titulo">Acerca de los Creadores</h2>
      <div className="acerca-row">
        <div className="acerca-card">
          <img src="/Fotos/Franco.png" alt="Franco Ochoa" className="acerca-img" />
          <div className="acerca-nombre">Franco Luciano Emmanuel Ochoa</div>
          <div className="acerca-desc">Estudiante de la carrera Analista Programador Universitario.</div>
          <div className="acerca-lu">LU: APU006358</div>
        </div>

        <div className="acerca-card">
          <img src="/fotos/compañero.jpg" alt="Nombre del Compañero" className="acerca-img" />
          <div className="acerca-nombre">Nombre del Compañero</div>
          <div className="acerca-desc">Estudiante de la carrera Analista Programador Universitario.</div>
          <div className="acerca-lu">LU: [LU del compañero]</div>
        </div>
      </div>
    </div>
  );
};

export default Acerca;
