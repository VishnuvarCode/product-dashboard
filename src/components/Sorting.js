import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

const Sorting = ({ setSortOrder }) => {
  return (
    <Container className="my-3">
      <Row>
        <Col xs={12} md={6} lg={4}>

          <Form.Group controlId="sortOrder">
            <Form.Label className="sort-price">Sort by Price</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Form.Control>

          </Form.Group>

        </Col>
      </Row>
    </Container>
  );
};

export default Sorting;
