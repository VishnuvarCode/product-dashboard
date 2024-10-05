import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Card className="h-100 text-center">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      
      <Card.Body>
        <Card.Title className="product-title">
          {product.title.length > 40
            ? `${product.title.substring(0, 40)}...`
            : product.title}
        </Card.Title>

        <Card.Text className="product-price">
          ₹{product.price.toLocaleString()} &nbsp;
          <span className="original-price">
            ₹{(product.price * 1.5).toLocaleString()}
          </span>
        </Card.Text>

        <Link to={`/product/${product.id}`}>
          <Button className="view-button btn-block">
            View Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;

