import React,{Component} from 'react';
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Game from './components/Game'
import NavBar from './components/NavBar';

export class App extends Component {

  constructor() {
    super()

    this.state = {
      allUsers: [],
      loggedInStatus: false,
      user: {}
    }

  }

  allUsers = () => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => this.setState({
      allUsers: data
    }))
  }

  componentDidMount = () => {
    this.allUsers()
  }

  handleRegistration = (data) => {
    this.setState({
      loggedInStatus: true,
      user: {
        id: data.id,
        name: data.name,
        points: 0,
        rounds: []
      }
    })
    console.log("state: ", this.state)
  }

  handleLogin = (userName) => {
    
    console.log('user name submitted: ', userName)
    if (!this.state.allUsers.find(element => element.name === userName)){
        console.log("Name unidentified")
        return <Redirect to={'/'} />
    }
    else{
        console.log("Logged in")
        let allUsers = [...this.state.allUsers]
        let user = allUsers.find(element => element.name === userName);
        this.setState({
          loggedInStatus: true,
          user: user
        })
        
        return <Redirect to={'/game'} />
       
    }
    

}

  handleLogout = () => {
    this.setState({
      
        allUsers: [],
        loggedInStatus: false,
        user: {}
      
    })

  }


  checkLoggedIn = () => {

    if(this.state.loggedInStatus){
      return <Redirect to={'/game'} />
    }
    else{
      return <Redirect to={'/'} />
    }
    
  }

  handleDeleteUser = () => {
    let userID = this.state.user.id
    fetch(`http://localhost:3000/users/${userID}`,{
      method: 'DELETE'
    })
    this.setState({
      allUsers: [],
      loggedInStatus: false,
      user: {}
    })
    window.location.reload()
  }



  render() {
     
    
   

  return (

    

    <div>
      
      <Router >
      {this.checkLoggedIn()}
      <NavBar handleDeleteUser={this.handleDeleteUser} />
      <Route exact path={'/'} render={(props) => (<Home {...props} allUsers={this.state.allUsers} handleLogin={this.handleLogin} handleRegistration={this.handleRegistration} loggedInStatus={this.state.loggedInStatus ? "LOGGED_IN":"NOT_LOGGED_IN" } />)} />
      <Route exact path={'/game'} render={(props) => (<Game {...props} />) }/>

      
      </Router>
      
    </div>
  );
}
}

export default App;
