import React from "react";
import "./Principal.css";

import centroAsistenciasLogo from "../../../assets/images/centro-asistencias.png";

const Principal = () => {
  return (
    <section id="principal" className="principal">
      <div className="content">
        <div className="container text-center">
          <h1>
            Bienvenido a <span>Centro de Asistencias</span>
          </h1>
          <p>En donde su bienestar es nuestra prioridad!</p>
        </div>
        <div className="principal-logo">
          <img src={centroAsistenciasLogo} alt="Centro de Asistencias" />
        </div>
      </div>
    </section>
  );
};

export default Principal;
