import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../../Components/Products";

export const Home = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <ProductCard />
        </Col>
      </Row>
    </Container>
  );
};
