import React from 'react';
import './contact.css'; 

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-header">
        <div className="contact-header-left">
          <h1>Dirección</h1> 
          <h1>Contactos</h1> 
        </div>
      </div>
      <div className="details">
        <div className="column">
          <div className='color-white'> 
          <h2>Nuestra ubicación</h2>
          <p>Av. Hipólito Yrigoyen 1234, Quilmes, Buenos Aires</p>
          </div>
          <h2>Horario de trabajo</h2>
          <p>Lunes - Viernes: 8AM - 6PM</p>
          <p>Sábado - Domingo: 9AM - 5PM</p>
        </div>
        <div className="column"> 
          <h2>Teléfono de la oficina</h2>
          <p>+54 011 1234-5678</p>
          <p>+54 011 8765-4321</p>

          <div className="correo"> 
          <h2>Correo electrónico</h2>
          <p>infoeco-clima.com.ar</p>
          <p>eco-clima@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
