import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => (
  <div className="home">
    <Container>
      <Row className="justify-content-md-center text-center">
        <Col className="product-name">
          <h1>Our Earth</h1>
          <h2>a virtual reality simulator<br />for education</h2>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
