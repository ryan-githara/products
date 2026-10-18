import React from 'react';
import product from '../product';
import { Card } from 'react-bootstrap';

function Image() {
  return <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'contain' }} />;
}

export default Image;