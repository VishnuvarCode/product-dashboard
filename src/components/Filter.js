import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

const Filter = ({ categories, setCategory }) => {
  return (
    <Container className="my-3">
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Form.Select
            aria-label="Filter by category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
