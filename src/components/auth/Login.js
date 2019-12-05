import React, { Component } from 'react'

export class Login extends Component {

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

    



    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleLogin(this.state.userName)
        this.setState({name:""})
    }
 


    render() {
        return  (
            
            <div>{console.log("props inside of login", this.props.allUsers)}
            <h1>LOGIN</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="userName" placeholder='username' value={this.state.userName} onChange={this.handleChange} required />
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Login
