import React, { useEffect, useState } from 'react';
import { withFirebase } from '../Firebase';
import {
  Alert, Button, Col, Container, Form, Modal, Row,
} from 'react-bootstrap';

// TODO: Refactor this file.
const Home = (props) => {
  const [shootStars, setShootStars] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    const interval = setInterval(() => setShootStars(!shootStars), 15000);
    return () => {
      clearInterval(interval);
    };
  }, [shootStars]);

  const closeAfter = (ms) => {
    setInterval(() => {
      setShowAlert(false);
      setShowModal(false);
    }, ms);
  }

  const sendData = (data) => {
    try {
      data['createdAt'] = props.firebase.timestamp;
      const newSubscription = props.firebase.subscriptions().push();
      newSubscription.set(data);
      setShowAlert(true);
      closeAfter(5000)
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};

    for (let name of formData.keys()) {
      const value = formData.get(name);
      data[name] = value;
    }
    sendData(data);
  }

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
            <h1>Our Earth</h1>
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
            <p>Be the first to know when it will be launched</p>
            <Button onClick={handleShow}>Subscribe</Button>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            Subscribe
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Control type="text" name="name" placeholder="Name" />
              <br />
              <Form.Control type="email" name="email" placeholder="Email" />
              <br />
              <Button type="submit">
                Subscribe
              </Button>
              <br />
              <br />
              <Alert variant="success" show={showAlert}>
                Thank you!
              </Alert>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default withFirebase(Home);
