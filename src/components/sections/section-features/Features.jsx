import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Características de Nuestros Servicios</h2>
        <p>Innovamos para ofrecer servicios de calidad que resuelvan las necesidades de nuestros clientes.</p>
      </div>

      <div className="container">
        <div className="row">
          {/* Tabs and Text Content */}
          <div className="col-lg-6 d-flex align-items-center">
            <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                  <i className="bi bi-house-door"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Asistencia en Emergencias del Hogar</h4>
                    <p>
                      Soluciones rápidas y efectivas para imprevistos en tu hogar. Cubre emergencias de plomería, gas, cerrajería y electricidad, asegurando la intervención de especialistas para resolver problemas como roturas, fallas o bloqueos.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                  <i className="bi bi-rocket"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Asistencia al Viajero</h4>
                    <p>
                      Ayuda en situaciones imprevistas durante tus viajes. Incluye cobertura para emergencias en transporte, asegurando que puedas continuar tu recorrido sin preocupaciones.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                  <i className="bi bi-briefcase"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Asesoría Legal Telefónica</h4>
                    <p>
                      Acceso a un equipo de abogados especialistas para resolver dudas legales en derecho penal, civil, comercial y laboral. La asesoría inicial telefónica es gratuita y brinda orientación sobre los pasos necesarios para tu caso.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Tab Content with Images */}
          <div className="col-lg-6">
            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div className="tab-pane fade active show" id="features-tab-1">
                <img src="src/assets/images/features-1.jpg" alt="Asistencia en Emergencias del Hogar" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
