import React, { Component } from "react";
// import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  handleChange = event => {
    console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("form submitted");

    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json"
      },
      body: JSON.stringify({
        name: this.state.userName,
        points: 0
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        if (data.name) {
          this.props.handleSuccessfulAuth(data);
        }
      })
      .catch(error => {
        console.log("registration error: ", error);
      });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        {/* <h1>Registration</h1>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="userName" placeholder='username' value={this.state.userName} onChange={this.handleChange} required />
                <button type="submit">Submit</button>
                </form> */}

        <Grid
          textAlign="center"
          style={{ height: "50vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              <Message> Register here!</Message>
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  name="userName"
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                {/* <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={this.setNewPassword}
                            /> */}

                <Button
                  color="blue"
                  fluid
                  size="large"
                  onClick={this.handleSubmit}
                >
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Button color="blue" onClick={this.props.handleRegistrationHelper}>
              Back to Login
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Registration;
