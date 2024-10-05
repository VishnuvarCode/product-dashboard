import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Container className="my-3">
      <Row>
        <Col xs={12} md={2} lg={4}>
        
          <Form.Control
            type="text"
            placeholder="Search products by name..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
