import React, { useEffect, useState } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Subscribe from '../Subscribe';
import * as ROUTES from '../../constants/routes';

const Home = (props) => {
  const history = useHistory();
  const location = useLocation();

  const [shootStars, setShootStars] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (location.pathname === ROUTES.SUBSCRIBE) {
      setShowModal(true);
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => setShootStars(!shootStars), 15000);
    return () => {
      clearInterval(interval);
    };
  }, [shootStars]);

  const handleShowModal = () => {
    history.push(ROUTES.SUBSCRIBE);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    history.push(ROUTES.HOME);
  };

  return (
    <div className="home">
      {shootStars
        && (
        <div className="night">
          <div className="shooting_star" />
          <div className="shooting_star" />
          <div className="shooting_star" />
        </div>
        )}
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col className="product-name">
            <h1>Odyssey</h1>
            <h2>
              a virtual reality simulator
              <br />
              for education
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col className="coming">
            <h1>Coming soon!</h1>
          </Col>
        </Row>

        <Row className="justify-content-md-center text-center">
          <Col className="subscribe">
            <p>Be the first to know when it will be launched!</p>
            <Button onClick={handleShowModal}>Subscribe</Button>
          </Col>
        </Row>
        <Subscribe show={showModal} onClose={onCloseModal} />
      </Container>
    </div>
  );
};

export default Home;
