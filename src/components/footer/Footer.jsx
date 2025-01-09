import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Centro de Asistencias. Todos los derechos reservados.</p>
        <p>Hecho con amor ❤️ por</p>
        <ul className="footer-links">
          <li><a href="https://www.linkedin.com/in/cristian-santander-03807b17b/" target="_blank" rel="noopener noreferrer">Cristian Santander</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;