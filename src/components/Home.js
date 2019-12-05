import React, { Component } from 'react'
import Registration from './auth/Registration'
import {Redirect} from 'react-router-dom'
import Login from './auth/Login';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: {
                id: null,
                name: null,
                points: null, 
                rounds: []

            }
        }

        console.log("props",props)
    }

    handleSuccessfulAuth = (data) => {
        this.props.handleRegistration(data)
    }

    
    
    render() {
         return (
            <div>  
                <h1> Home </h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}  />
                <Login handleLogin={this.props.handleLogin} allUsers={this.props.allUsers} loggedInStatus={this.props.loggedInStatus}/>
                <button>Logout</button>
            </div>
        ) 
    }
}

export default Home
