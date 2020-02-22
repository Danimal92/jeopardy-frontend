import React, { Component } from "react";
import { Grid, Segment, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export class Clue extends Component {
  state = {
    question: "",
    answer: "",
    userInput: "",
    money: 0
  };

  handleChange = event => {
    event.preventDefault();
    console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addMoney = num => {
    this.setState({
      money: this.state.money + num
    });
  };

  handleInputSubmit = e => {
    e.preventDefault();
    let question = this.props.clue.question;

    if (
      this.state.userInput.toLowerCase() ===
      this.props.clue.answer.toLowerCase()
    ) {
      alert(`nice! ${this.props.clue.answer}`);
      this.addMoney(100);
      this.props.addPoints(100);

      this.props.addQuestion(question);
      this.props.updateUserRound(100);
    } else {
      alert(`Incorrect: ${this.props.clue.answer}`);
      this.addMoney(-100);
      this.props.addPoints(-100);
      this.props.addQuestion(question);
      this.props.updateUserRound(-100);
    }
  };

  componentDidMount = () => {
    let question = this.props.clue.question;
    let answer = this.props.clue.answer;

    this.setState({
      question: question,
      answer: answer
    });
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <Segment inverted color="black" compact>
          {this.state.submitted
            ? this.props.clue.answer
            : this.props.clue.question}
        </Segment>
        <form onSubmit={this.handleInputSubmit}>
          <input
            type="text"
            name="userInput"
            placeholder="answer"
            value={this.state.userInput}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Clue;
