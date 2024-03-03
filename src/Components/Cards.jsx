// Card.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MyCard = ({ imageUrl, title, description, buttonText }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title style={{ fontFamily: 'Arial', fontSize: '1.25rem' }}>{title}</Card.Title>
        <Card.Text style={{ fontFamily: 'Arial' }}>{description}</Card.Text>
        <Button variant="primary" style={{ fontFamily: 'Arial' }}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
