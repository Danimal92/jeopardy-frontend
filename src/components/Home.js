import React, { Component } from 'react'
import Registration from './auth/Registration'
import {Redirect} from 'react-router-dom'
import Login from './auth/Login';
import { Grid, Segment, Header } from 'semantic-ui-react'

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
                <Header textAlign='center' size='huge'>Home</Header>
                <Header textAlign='left' size='huge'>Status: {this.props.loggedInStatus}</Header>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}  />
                <Login handleLogin={this.props.handleLogin} allUsers={this.props.allUsers} loggedInStatus={this.props.loggedInStatus}/>
                
            </div>
        ) 
    }
}

export default Home
