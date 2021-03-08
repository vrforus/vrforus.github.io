import React, { useEffect, useState } from 'react';
import {
  Alert, Button, Form, Modal,
} from 'react-bootstrap';
import { withFirebase } from '../Firebase';

const Subscribe = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (props.show === undefined) {
      throw new Error('Prop \'show\' variable has to defined.');
    }

    if (props.onClose === undefined) {
      throw new Error('Prop \'onClose\' function has to defined.');
    }
  }, [props]);

  const closeAfter = (ms) => {
    setInterval(() => {
      setShowAlert(false);
      props.onClose();
    }, ms);
  };

  const sendData = (data) => {
    try {
      data.createdAt = props.firebase.timestamp;
      const newSubscription = props.firebase.subscriptions().push();
      newSubscription.set(data);
      setShowAlert(true);
      closeAfter(5000);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};

    for (const name of formData.keys()) {
      const value = formData.get(name);
      data[name] = value;
    }
    sendData(data);
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          Subscribe
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control type="text" name="name" placeholder="Name" required />
            <br />
            <Form.Control type="email" name="email" placeholder="Email" required />
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
    </>
  );
};

export default withFirebase(Subscribe);
