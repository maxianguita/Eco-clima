import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',   // Reemplaza con tu Service ID
      'YOUR_TEMPLATE_ID',   // Reemplaza con tu Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'YOUR_USER_ID'        // Reemplaza con tu User ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado!');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Error al enviar el mensaje.');
      });

    // Reiniciar formulario
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Deja tu mensaje</h2>
        <div className="input-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Escribe tu nombre"
          />
        </div>
        <div className="input-group">
          <label>Correo</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Escribe tu correo"
          />
        </div>
        <div className="input-group">
          <label>Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Escribe tu mensaje"
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
