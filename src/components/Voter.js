import React from 'react';
import {addVote} from '../api'
import styles from '../styles/Voter.module.css'
import thumbsUp from '../images/thumbsUp.png'
import thumbsDown from '../images/thumbsDown.png'

class Voter extends React.Component {
    state = {
        voteMod: 0,
        err: null
    }

    render() {
        return(
            <div className={styles.voter}>
                <button id='up' onClick={()=> this.voteAdder(1)} disabled={this.state.voteMod === 1}>
                <img src={thumbsUp} alt="{thumbsUp}" /></button>
                <h3>Votes: {this.props.votes + this.state.voteMod}</h3>
                <button id='down' onClick={()=> this.voteAdder(-1)} disabled={this.state.voteMod === -1} >
                <img src={thumbsDown} alt="{thumbsDown}" /></button>
            </div>
        )
    }

    voteAdder = num => {
        addVote(this.props.type, this.props.id, num).catch(err => {
        this.setState(err)
        })
        this.setState(state => {
            return {voteMod: state.voteMod + num}
        })
    }
}

export default Voter