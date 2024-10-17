import React from "react";
import './Home.css'
import Maps from '../Maps/Maps'; 
import ContactInfo from "../Contact/Contact";
import ContactForm from "../Form/Createform";

const Inicio = () => {
  return (
    <div>
      <a
        href="https://wa.me/5491112345678" // Reemplaza con tu número de WhatsApp
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Puedes usar tu propio ícono si lo prefieres
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
      <header className="hero-section">
        <h1 className="hero-title">Eco Clima</h1>
        <p className="hero-description">Ofrecemos productos increíbles.</p>
        <a href="#productos" className="cta-button">Descubre más</a>
      </header>

      <section id="productos" className="products-section">
        <h2>Nuestros Productos</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://static.vecteezy.com/system/resources/previews/012/909/792/non_2x/air-conditioner-appliance-free-png.png" alt="Aire Acondicionado" className="product-image" />
            <h3>Ventilador Pared Motor Industrial 26 ¡</h3>
            <p>C/ Giro Y Reclinable - Palas Metalicas - Industria Nacional.</p>
            <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
          </div>

          <div className="product-card">
  <img src="https://http2.mlstatic.com/D_NQ_NP_2X_912695-MLA40104955344_122019-F.webp" alt="Aire Acondicionado" className="product-image" />
  <h3>Aire Acondicionado Split 3500W</h3>
  <p>Aire acondicionado split de 3500W, frío/calor, ideal para ambientes medianos.</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>

<div className="product-card">
  <img src="https://backend.rheem.com.ar/media/image/bd/ac/77d93c0d5070fff74936abe21c36.jpg" alt="Termotanque Solar" className="product-image" />
  <h3>Termotanque Solar 200L</h3>
  <p>Termotanque solar de 200 litros, ideal para aprovechar la energía solar.</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>

<div className="product-card">
  <img src="https://sanitarioslamas.com.ar/wp-content/uploads/2024/02/descarga-67.png" alt="Radiador de Calefacción" className="product-image" />
  <h3>Radiador de Calefacción</h3>
  <p>Radiador de calefacción de alto rendimiento para mantener tu hogar cálido en invierno.</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>

<div className="product-card">
  <img src="https://http2.mlstatic.com/D_NQ_NP_2X_708132-MLA48602596179_122021-F.webp" alt="Jacuzzi de 4 Plazas" className="product-image" />
  <h3>Jacuzzi de 4 Plazas</h3>
  <p>Jacuzzi de lujo para 4 personas, con hidromasaje y control de temperatura.</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>

<div className="product-card">
  <img src="https://http2.mlstatic.com/D_NQ_NP_2X_791410-MLA47058569757_082021-F.webp" alt="Caldera de Gas" className="product-image" />
  <h3>Caldera de Gas Natural</h3>
  <p>Caldera de gas natural para calefacción y agua caliente de alta eficiencia.</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>

<div className="product-card">
  <img src="https://images.megatone.net/Articulos/zoom2x/62/CAL1574CRI.jpg" alt="Calefactor Eléctrico" className="product-image" />
  <h3>Calefactor Eléctrico de Pared</h3>
  <p>Calefactor eléctrico de pared, ideal para espacios pequeños y medianos.</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>

<div className="product-card">
  <img src="https://sanitarioslamas.com.ar/wp-content/uploads/2024/02/Caldera-DIVA-TECNO-SMART-PERSP_negro_sin-fondo_display.png" alt="Caldera Eléctrica" className="product-image" />
  <h3>Caldera Eléctrica 24kW</h3>
  <p>Caldera eléctrica de alta potencia, perfecta para sistemas de calefacción por radiadores.</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>

<div className="product-card">
  <img src="https://backend.rheem.com.ar/media/image/9c/b6/89d8edf6c86939c8ff00aae2020f.jpg" alt="Termotanque a Gas" className="product-image" />
  <h3>Termotanque a Gas 80L</h3>
  <p>Termotanque a gas de 80 litros, ideal para agua caliente sanitaria en tu hogar.</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>

<div className="product-card">
  <img src="https://http2.mlstatic.com/D_NQ_NP_2X_958951-MLU69018032762_042023-F.webp" alt="Calefactor Industrial" className="product-image" />
  <h3>Calefactor Industrial 5000W</h3>
  <p>Calefactor de alta potencia para uso industrial o grandes superficies.</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>
<div className="product-card">
  <img src="https://www.novogar.com.ar/public/images/productos/producto_4219_1.jpg?rnd=175807103" alt="Calefactor Industrial" className="product-image" />
  <h3>Caloventor Industrial Liliana 4000w Termostato</h3>
  <p>Caloventor Industrial  4000w Termostato .</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>
<div className="product-card">
  <img src="https://www.novogar.com.ar/public/images/productos/producto_181_1.jpg?rnd=372491908" alt="Calefactor Industrial" className="product-image" />
  <h3>Caloventor Minisol Liliana 1000/2000w</h3>
  <p>Caleventor de alta potencia para uso 1000/2000w cable reforzado para grandes potencias .</p>
  <a href="https://www.mercadolibre.com" className="product-link">Ver en Mercado Libre</a>
</div>
</div>
</section>
<ContactInfo/>
<div className="contact-page">
  <div className="contact-form-wrapper">
    <ContactForm />
    <Maps/>
  </div>
  
</div>
    </div>
  );
};

export default Inicio;
