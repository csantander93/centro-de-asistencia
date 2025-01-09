import "./Principal.css";

const Principal = () => {
  return (
    <section id="principal" className="principal">
      <div className="content">
        <div className="container text-center">
          <h1>Bienvenido a <span>Centro de Asistencias</span></h1>
          <p>En donde su bienestar es nuestra prioridad!</p>
        </div>
        <div className="principal-logo">
          <img src="src/assets/images/centro-asistencias.jpg" alt="Centro de Asistencias" />
        </div>
      </div>
    </section>
  );
};

export default Principal;
