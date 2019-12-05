import React, { Component } from 'react'

export class Registration extends Component {

    constructor(props){
        super(props)
        this.state = {
            userName: ""
        }    
    
        
    }

    handleChange = (event) => {
        console.log('handle change', event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('form submitted')

        fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json"
        },
        body: JSON.stringify({
          user: {
              name: this.state.userName
          }
        })
    })
    .then(response => (response.json()))
    .then(data => {
        console.log('data',data)
        if(data.name){
            this.props.handleSuccessfulAuth(data)
        }    
    })
        .catch(error => {
        console.log("registration error: ", error)
    })

        event.preventDefault()


    }

    render() {
        return (
            <div>
                <h1>Registration</h1>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="userName" placeholder='username' value={this.state.userName} onChange={this.handleChange} required />
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Registration
