import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Asegúrate de que la ruta del CSS sea correcta
import logo from '../../img/Logo.png'; // Importa la imagen desde la carpeta src

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) { // Si el scroll es mayor a 50px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambia el estado del menú
  };

  const closeMenu = () => {
    setMenuOpen(false); // Cierra el menú
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <nav className={navbarClasses.join(' ')}>
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
      </div>
      {/* Botón de menú hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/" onClick={closeMenu}>Inicio</a></li>
        <li><a href="#productos" onClick={closeMenu}>Productos</a></li>
        <li><a href="/nosotros" onClick={closeMenu}>Sobre Nosotros</a></li>
        <li><a href="contact" onClick={closeMenu}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
