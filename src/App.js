import React,{Component} from 'react';
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Game from './components/Game'
import NavBar from './components/NavBar';


export class App extends Component {

  constructor() {
    super()

    this.state = {
      allUsers: [],
      loggedInStatus: false,
      user: {},
      clues: [],
      round: {
        questions: null,
        money: null,
        user_id: null
        
    }
    }
  }


    addPoints = (points) => {
      this.setState({
        user:{
          points: this.state.user.points + points
        }
      })
    }

    addQuestion = (question) => {
      this.setState({
        round: {
          questions: this.state.round.questions + ',' + question
        }
      })
    }

  allUsers = () => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => this.setState({
      allUsers: data
    }))
    
    console.log('%c All users found', this.state.allUsers)
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
    }, () => console.log("state: ", this.state))
    
  }

  handleLogin = (userName) => {

    this.allUsers()
    
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
          user: user,
          round: {
            user_id: user.id
          }
        })
        this.getClues()
        
        return <Redirect to={'/game'} />
       
    }
    

}



  handleLogout = () => {
    this.setState({
      
        
        loggedInStatus: false,
        user: {},
        clues: [],
        round: {
          questions: null,
          money: null,
          user_id: null
          
      }
        
      
    })

    return <Redirect to={'/'} />
    

  }

  // addPoints = (points) => {
  //   this.setState({
  //     user: {...this.state.user, ...this.state.user.points + points},
  //     round: [...this.state.round, ...this.state.round.money + points]
    
  //   })
  // }


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
      user: {},

    })
    this.clearClues()
    window.location.reload()
  }

  getClues = () => {

    Promise.all([
      fetch('http://localhost:3000/get_questions'),
      fetch('http://localhost:3000/get_questions'),
      fetch('http://localhost:3000/get_questions'),
      fetch('http://localhost:3000/get_questions'),
      fetch('http://localhost:3000/get_questions')
]).then(([res1,res2,res3,res4,res5]) => Promise.all([res1.json(),res2.json(),res3.json(),res4.json(),res5.json()]))
.then(([res1,res2,res3,res4,res5]) => {
  this.setState({
    clues: [res1.slice(0,5),res2.slice(0,5),res3.slice(0,5),res4.slice(0,5),res5.slice(0,5)]
  }, ()=>console.log(this.state.clues))
})
.catch(error => console.log(error))
  }
// for (let i = 0; i<1;i++) {
    //   fetch('http://localhost:3000/get_questions'),
    //   fetch('http://localhost:3000/get_questions')
    //   fetch('http://localhost:3000/get_questions')
    //   fetch('http://localhost:3000/get_questions')
    //   fetch('http://localhost:3000/get_questions')
    //   .then(res => res.json())
    //   .then(data => {
    //     board.push(data.splice(0,5))
        
    //     }
    //   })
    // }


        
    
    

  clearClues = () => {
    this.setState({
      clues: []
    })
  }

  

  // handleRoundQuestions = () => {
  //   let questions = []
  //   this.state.clues.map(object => (
  //     object.map((object) => {
  //       questions.push(object.question)
  //     })
  //   ))
  //   this.setState({
  //     round: {...this.state.round,
  //        questions: questions}
  //   })
  // }
  

  componentDidMount = () => {
    this.allUsers()
    // if(this.state.loggedInStatus){
    //   this.getClues()
    // }
  
}

        
 



  render() {

    
    

   

  
    
return(
    
    

    <div>
      
      <Router >
      {this.checkLoggedIn()}
      
      
      <Route exact path={'/'} render={(props) => (<Home {...props} allUsers={this.state.allUsers} handleLogin={this.handleLogin} handleRegistration={this.handleRegistration} loggedInStatus={this.state.loggedInStatus ? "LOGGED_IN":"NOT_LOGGED_IN" } />)} />
      <Route exact path={'/game'} render={(props) => (<Game {...props} addPoints={this.addPoints} addQuestion={this.addQuestion} handleLogin={this.handleLogin} allUsers={this.allUsers} userID={this.state.user.id} clues={this.state.clues} getClues={this.getClues} handleEditUsername={this.handleEditUsername}  clearClues={this.clearClues} checkLoggedIn={this.checkLoggedIn} />) }/>
      <NavBar handleDeleteUser={this.handleDeleteUser} handleLogout={this.handleLogout} getClues = {this.getClues}  /><br/>
      
      </Router>
      
    </div>
  

)}
}

export default App;
