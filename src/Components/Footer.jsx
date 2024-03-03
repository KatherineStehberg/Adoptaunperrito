import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p style={textStyle}>¡Gracias por visitar nuestra galería de imágenes! En nuestra galería, encontrarás adorables perritos que esperan ser adoptados y encontrar un hogar amoroso.</p>
        <p style={textStyle}>¡No olvides compartir esta galería con tus amigos para ayudar a estos perritos a encontrar un nuevo hogar!</p>
        <p style={textStyle}>&copy; {new Date().getFullYear()} Adopta un Perrito</p>
      </div>
    </footer>
  );
};

// Estilos personalizados
const footerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  textAlign: 'center',
  marginTop: '20px',
  borderTop: '1px solid #ccc',
};

const contentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const textStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
};

export default Footer;

