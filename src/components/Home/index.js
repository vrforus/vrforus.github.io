import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => (
  <div className="home">
    <div className="night">
      <div className="shooting_star" />
      <div className="shooting_star" />
      <div className="shooting_star" />
    </div>
    <Container>
      <Row className="justify-content-md-center text-center">
        <Col className="product-name">
          <h1>Our Earth</h1>
          <h2>a virtual reality simulator<br />for education</h2>
        </Col>
      </Row>

      <Row className="justify-content-md-center text-center">
        <Col className="coming">
          <h1>Coming soon!</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
