import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded" key={product._id}>
      <a href={`/product/${product._id}`}>
        <Card.Img
          src={
            product.countInStock[0]
              ? product.countInStock[0].image
              : product.image
          }
          variant="top"
        />
      </a>
      <Card.Body>
        <a href={`/product.${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} Stars from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
