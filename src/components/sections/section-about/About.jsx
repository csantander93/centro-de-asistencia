import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          {/* Texto e información */}
          <div className="col-md-6 about-text" data-aos="fade-up" data-aos-delay="100">
            <p className="about-heading">¿Quiénes somos?</p>
            <h3 className="about-title">
              En Centro de Asistencias, trabajamos para brindar tranquilidad y soluciones inmediatas a nuestros
              clientes ante situaciones imprevistas.
            </h3>
            <p className="about-description">
              Ofrecemos una amplia gama de servicios de asistencia que están disponibles todos los días del año, con el
              compromiso de proporcionar atención profesional, rápida y eficiente en el hogar, durante viajes, o en
              casos de necesidad legal. Nuestra misión es ser el soporte confiable en los momentos de emergencia,
              permitiendo que nuestros clientes se enfoquen en lo que realmente importa.
            </p>
            <ul className="about-list">
              <li>
                <i className="bi bi-check-circle"></i>{" "}
                <span>Asistencia en plomería, gas, cerrajería y electricidad ante emergencias.</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>{" "}
                <span>
                  Cobertura para gastos de traslado en caso de desperfectos mecánicos o robos durante viajes.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>{" "}
                <span>Consultoría legal telefónica en derecho penal, civil, comercial o laboral.</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>{" "}
                <span>
                  Respuesta rápida y profesional, disponible las 24 horas del día, los 365 días del año.
                </span>
              </li>
            </ul>
            <a href="#" className="about-read-more">
              <span>Leer más</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          {/* Imágenes */}
          <div className="col-md-6 about-images-collage" data-aos="fade-up" data-aos-delay="200">
            <img src="src/assets/images/about/about-company-1.jpg" className="img-fluid" alt="Imagen 1" />
            <img src="src/assets/images/about/about-company-2.jpg" className="img-fluid" alt="Imagen 2" />
            <img src="src/assets/images/about/about-company-3.jpg" className="img-fluid" alt="Imagen 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
