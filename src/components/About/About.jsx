import React from 'react';
import './About.css'; // Asegúrate de enlazar tu archivo de estilos

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre Nosotros</h1>
      <p>
        Somos una empresa dedicada a ofrecer soluciones de climatización de alta
        calidad. Nuestro equipo de profesionales tiene años de experiencia en el
        sector, brindando un servicio excepcional a nuestros clientes. Desde la
        instalación de aire acondicionado hasta el mantenimiento y reparación de
        sistemas, nuestro objetivo es garantizar tu confort en cualquier época del año.
      </p>

      {/* <div className="contact-info">
        <div className="contact-header">
          <div className="contact-header-left">
            <h1>Contactos</h1>
          </div>
        </div>
        <div className="contact-details">
          <div className="column">
            <h2>Nuestra ubicación</h2>
            <p>2900 Lapeer Rd, Port Hurons, MI 49070</p>

            <h2>Horario de trabajo</h2>
            <p>Lunes - Viernes: 8AM - 6PM</p>
            <p>Sábado - Domingo: 9AM - 5PM</p>
          </div>
          <div className="column">
            <h2>Teléfono de la oficina</h2>
            <p>+1 (800) 478-42-51</p>
            <p>+1 (800) 474-23-82</p>

            <h2>Correo electrónico</h2>
            <p>info@companyname.com</p>
            <p>fixup@companyname.com</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
