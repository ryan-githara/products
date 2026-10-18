import React from 'react';
import product from '../product';

function Price() {
  return <h5 className="text-danger">{product.price}</h5>;
}

export default Price;