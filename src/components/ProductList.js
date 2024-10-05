import React from "react";
import ProductItem from "./ProductItem";
import { Container, Row, Col } from "react-bootstrap";

const ProductList = ({ products }) => {
  return (
    <Container fluid>
      <Row className="g-4 m-3">

        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Col>
        ))}
        
      </Row>
    </Container>
  );
};

export default ProductList;
