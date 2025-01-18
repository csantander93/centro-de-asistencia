import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import logo from "../../assets/images/logo-header.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Estado inicial vacío

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header id="header" className="header-container">
      <div className="header-content container-xl d-flex align-items-center">
        {/* Logo y texto */}
        <a href="#principal" className="logo-container d-flex align-items-center">
          <img src={logo} alt="Logo" />
          <h1 className="logo-text">Centro de Asistencias</h1>
        </a>

        {/* Ícono del menú hamburguesa */}
        <i
          className="mobile-menu-toggle d-xl-none bi bi-list"
          onClick={toggleMenu}
        ></i>

        {/* Menú de navegación como modal */}
        <nav className={`navbar ${menuOpen ? "navbar-open" : ""}`}>
          <ul className="navbar-links">
            {[
              { id: "principal", label: "Inicio" },
              { id: "about", label: "Sobre nosotros" },
              { id: "features", label: "Características" },
              { id: "services", label: "Servicios" },
              { id: "contact", label: "Contacto" },
            ].map(({ id, label }) => (
              <li key={id}>
                <Link
                    to={id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className={`navbar-link ${activeLink === id ? "active" : ""}`}
                    onSetActive={() => setActiveLink(id)}
                    onClick={() => setMenuOpen(false)}
                    offset={-70} // Ajusta este valor según la altura del header
                  >
                    {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
