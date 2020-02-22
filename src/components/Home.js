import React, { Component } from 'react'
import Registration from './auth/Registration'
import {Redirect} from 'react-router-dom'
import Login from './auth/Login';
import { Grid, Segment, Header } from 'semantic-ui-react'

class Home extends Component {

    
       state = {
            login: true,
            user: {
                id: null,
                name: null,
                points: null, 
                rounds: [],
                

            }
        
        
        
    }

    handleSuccessfulAuth = (data) => {
        this.props.handleRegistration(data)
    }

    handleLoginHelper = () => {
         

        this.setState({login: false})

    }

    handleRegistrationHelper = () => {
         

        this.setState({login: true})

    }

    

    
    
    render() {
         return (
            <div>  
                <Header textAlign='center' size='huge'>Home</Header>
                {this.state.login ? <Login handleLoginHelper={this.handleLoginHelper} handleLogin={this.props.handleLogin} allUsers={this.props.allUsers} loggedInStatus={this.props.loggedInStatus}/> : <Registration handleRegistration={this.props.handleRegistration} handleRegistrationHelper={this.handleRegistrationHelper} handleSuccessfulAuth={this.handleSuccessfulAuth}  />  }
                
            </div>
        ) 
    }
}

export default Home
