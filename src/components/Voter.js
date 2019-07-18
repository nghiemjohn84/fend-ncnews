import React from 'react';
import {addVote} from '../api'
import styles from '../styles/Voter.module.css'

class Voter extends React.Component {
    state = {
        voteMod: 0,
        err: null
    }

    render() {
        return(
            <div className={styles.voter}>
                <button onClick={()=> this.voteAdder(1)} disabled={this.state.voteMod === 1}>UP</button>
                <button onClick={()=> this.voteAdder(-1)} disabled={this.state.voteMod === -1}>DOWN</button>
                Votes: {this.props.votes + this.state.voteMod}
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