import React, { Component } from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import CluesList from './CluesList'
import LoaderExampleLoader from './LoaderHOC'

export class Game extends Component {

    constructor(props){
        super(props)
        
        this.state = {
             userName: ''
        }
    }

    
    

    

    componentDidMount = () => {
        
        // this.props.getClues()


        console.log("1", this.props.clues)
    

        
    }
    
    
    handleEditChange = (event) => {
        console.log('handle change', event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleEditUsername =(e) => {
        e.preventDefault()
        console.log(e)
        let name = this.state.userName
        // console.log(name)
        fetch(`http://localhost:3000/users/${this.props.userID}`,
        {
          method: 'PATCH',
          body: JSON.stringify({
          user: {
            name: name
          }
          }),
          headers: {
          'Content-type': 'application/json; charset=UTF-8'
          }
          }).then(res => res.json())
          .then(data => console.log(data))

          this.props.allUsers()

          this.props.handleLogin()
      }






    render() {
        {this.props.checkLoggedIn()}
        console.log('Game props', this.props)
        return (

            
            
            <div>
                <Header  textAlign='center' color='blue' size='huge'>Jeopardy</Header><br/>
                <CluesList addPoints={this.props.addPoints} addQuestion={this.props.addQuestion} checkLoggedIn={this.props.checkLoggedIn} clues={this.props.clues} clearClues={this.props.clearClues} addPoints={this.props.addPoints} />
                <button onClick={this.props.getClues}>New Game</button>
                <form onSubmit={this.handleEditUsername}>
                <input type="text" name="userName" placeholder='username' value={this.state.userName} onChange={this.handleEditChange} required />
                <button type="submit">Submit</button>
                </form>
            </div>

        )
        
    }
}

export default Game
