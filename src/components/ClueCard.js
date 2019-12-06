import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Clue from './Clue'
import 'semantic-ui-css/semantic.min.css'

export const ClueCard = (props) => {

    


    return (
      
        <>
        {console.log('clue card props:', props)}
        {props.clues.map((clue) => (
            <Clue addPoints={props.addPoints} addQuestion={props.addQuestion} key={clue.id} clue={clue} />
        ))}
        </>
    )
}

export default ClueCard