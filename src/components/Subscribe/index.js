import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class SubscribePage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};

    for (let name of formData.keys()) {
      const value = formData.get(name);
      data[name] = value;
    }

    this.sendData(data);
  }

  sendData = (data) => {
    data['createdAt'] = this.props.firebase.timestamp;
    const newSubscription = this.props.firebase.subscriptions().push();
    newSubscription.set(data);
  }

  render() {
    return (
      <div>
        <h1>Subscriptions</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withFirebase(SubscribePage);
