import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="loader"></div>
      </div>
    );
  }

  if (!product) {
    return <div>Error: Product not found</div>;
  }

  return (
    <Container className="product-details-container">
      <Row>

        {/* image section */}
        <Col md={6} className="product-image-container">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          ) : (
            <div>No image available</div>
          )}
        </Col>

        {/* details section */}
        <Col md={6} className="product-info-container">
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>

            {/* price with original price */}
            <p className="product-price">
              ₹{product.price.toLocaleString()} &nbsp;
              <span className="original-price">
                ₹{(product.price * 1.5).toLocaleString()}
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;



