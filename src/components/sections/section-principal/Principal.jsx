import React from "react";
import "./Principal.css";

// Importa la imagen
import centroAsistenciasLogo from "../../../assets/images/centro-asistencias.jpg";

const Principal = () => {
  return (
    <section id="principal" className="principal">
      <div className="content">
        <div className="container text-center">
          <h1>Bienvenido a <span>Centro de Asistencias</span></h1>
          <p>En donde su bienestar es nuestra prioridad!</p>
        </div>
        <div className="principal-logo">
          {/* Usando la imagen importada */}
          <img src={centroAsistenciasLogo} alt="Centro de Asistencias" />
        </div>
      </div>
    </section>
  );
};

export default Principal;
