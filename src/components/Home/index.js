import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => (
  <div className="home">
    <Container>
      <Row>
        <Col>
          <div className="product-name ">
            <h1>Our Earth</h1>
            <h2>a virtual reality simulator<br />for education</h2>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
