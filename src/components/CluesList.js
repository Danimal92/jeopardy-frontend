import React from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ClueCard from './ClueCard'
import Clue from './Clue'

export class CluesList extends React.Component {

  

  
      
  render(){
    {console.log('clues list props:', this.props)}
      if (this.props.checkLoggedIn() && this.props.clues.length > 0) {

      
      return (
        
        <div>




          <Grid padded relaxed='very' columns='equal'>
            <Grid.Column color={'blue'}>
            <Segment inverted color='black'>{this.props.clues[0][0].category.title}</Segment>
          <ClueCard addPoints={this.props.addPoints} addQuestion={this.props.addQuestion} clues={this.props.clues[0]} clearClues={this.props.clearClues} />
          </Grid.Column>
          <Grid.Column color={'orange'}>
          <Segment inverted color='black'>{this.props.clues[1][0].category.title}</Segment>
          <ClueCard addPoints={this.props.addPoints} addQuestion={this.props.addQuestion} clues={this.props.clues[1]} clearClues={this.props.clearClues}/>
          </Grid.Column>
          <Grid.Column color={'blue'}>
          <Segment inverted color='black'>{this.props.clues[2][0].category.title}</Segment>
          <ClueCard addPoints={this.props.addPoints} addQuestion={this.props.addQuestion} clues={this.props.clues[2]} clearClues={this.props.clearClues}/>
          </Grid.Column>
          <Grid.Column color={'orange'}>
          <Segment inverted color='black'>{this.props.clues[3][0].category.title}</Segment>
          <ClueCard addPoints={this.props.addPoints} addQuestion={this.props.addQuestion} clues={this.props.clues[3]} clearClues={this.props.clearClues}/>
          </Grid.Column>
          <Grid.Column color={'blue'}>
          <Segment inverted color='black'>{this.props.clues[4][0].category.title}</Segment>
          <ClueCard addPoints={this.props.addPoints} addQuestion={this.props.addQuestion} clues={this.props.clues[4]} clearClues={this.props.clearClues}/>
          </Grid.Column>
          </Grid>

        
        
      
        </div>
      )
    } else {
      return null
    }
    }
  }

export default CluesList