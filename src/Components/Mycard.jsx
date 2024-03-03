import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags'; // Importa el componente Tags

const MyCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://famores.com/wp-content/uploads/2024/03/perrito.jpg" />
        <Card.Body>
          <Card.Title>Adopta un Perrito</Card.Title>
          {/* Aquí pasamos el color como "warning" */}
          <Tags text="Etiqueta" color="warning" />
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;


