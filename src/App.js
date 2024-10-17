import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Inicio from './components/Home/Home';
import ContactForm from './components/Form/Createform';
import Maps from './components/Maps/Maps';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Nosotros from './components/Nosotros-Movil/Nosotros';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Footer está fuera de Routes, por lo que siempre aparecerá */}
      </div>
    </Router>
  );
}

export default App;
