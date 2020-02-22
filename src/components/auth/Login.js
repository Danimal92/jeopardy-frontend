import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

export class Login extends Component {
  state = {
    userName: ""
  };

  handleChange = event => {
    console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogin(this.state.userName);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
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
              <Message>Login</Message>
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
                                    onChange={this.setPassword}
                                /> */}

                <Button
                  color="blue"
                  fluid
                  size="large"
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Button color="blue" onClick={this.props.handleLoginHelper}>
              New to us? Click here!
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
