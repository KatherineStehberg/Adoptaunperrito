// App.jsx
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'; 
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Cards'; // Corrige la importación del componente Card

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="card-container">
        <Card 
          imageUrl="https://famores.com/wp-content/uploads/2024/03/perrito.jpg"
          title="Perrito 1"
          description="Este es el primer perrito que puedes adoptar. Es muy juguetón y amigable."
          buttonText="Buscar"
        />
        <Card 
          imageUrl="https://famores.com/wp-content/uploads/2024/03/perrito2.jpg"
          title="Perrito 2"
          description="Aquí tienes otro perrito adorable que espera encontrar un hogar amoroso."
          buttonText="Ver más"
        />
        <Card 
          imageUrl="https://famores.com/wp-content/uploads/2024/03/perrito-3.jpg"
          title="Perrito 3"
          description="Este es el tercer perrito en nuestra galería. Es muy tranquilo y cariñoso."
          buttonText="Ver más"
        />
        <Card 
          imageUrl="https://famores.com/wp-content/uploads/2024/03/perrito4.jpg"
          title="Perrito 4"
          description="¡Conoce al cuarto perrito! Es muy inteligente y le encanta jugar a buscar."
          buttonText="Ver más"
        />
        <Card 
          imageUrl="https://famores.com/wp-content/uploads/2024/03/perrito5.jpg"
          title="Perrito 5"
          description="Aquí tienes otro amigo peludo que está esperando ser adoptado. Es muy leal y protector."
          buttonText="Ver más"
        />
        <Card 
          imageUrl="https://famores.com/wp-content/uploads/2024/03/perrito6.jpg"
          title="Perrito 6"
          description="Por último, pero no menos importante, este es nuestro sexto perrito. Es muy dulce y amoroso."
          buttonText="Ver más"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
