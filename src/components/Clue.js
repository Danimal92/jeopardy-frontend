import React, { Component } from 'react'
import { Grid, Segment, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export class Clue extends Component {

    state = {
        question: this.props.clue.question,
        answer: this.props.clue.answer,
        userInput: '' 
    }

    handleChange = (event) => {
        event.preventDefault()
        console.log('handle change', event)
        this.setState({
            [event.target.name]: event.target.value
        })
    } 



    handleInputSubmit = (e) => {
        e.preventDefault()
        if(this.state.userInput.toLowerCase()===this.state.answer.toLowerCase()){
            alert('nice!')
            this.props.addPoints(100)
            this.props.addQuestion()
        }
        else{
            alert('nah that aint it chief')
            this.props.addPoints(-100)
        }

    }

    handleClick = () => {
        this.setState({
            
        })
    }

    


    render() {
        return (
            <div onClick={this.handleClick}>
        
        <Segment inverted color='black'  compact>{this.state.submitted ? this.props.clue.answer:this.props.clue.question}</Segment>
        <form onSubmit={this.handleInputSubmit}>
                <input type="text" name="userInput" placeholder='answer' value={this.state.userInput} onChange={this.handleChange} required />
                <button type="submit">Submit</button>
                </form>
                   
         </div>
        )
    }
}

export default Clue
