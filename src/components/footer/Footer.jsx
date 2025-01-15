import React from 'react';
import './Footer.css';
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: Brand and Description */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Logo de Centro de Asistencias"
            className="footer-logo"
          />
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-links-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li>
              <a href="#about">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
            <li>
              <a href="#faq">Preguntas Frecuentes</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Centro de atención 1234, Ciudad
          </p>
          <p>
            <a href="mailto:centroasistencias@gmail.com">
              centroasistencias@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+541160096463">0810-268-3762</a>
          </p>
        </div>

        {/* Section 4: Social Media */}
        <div className="footer-social">
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Centro de Asistencias. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
