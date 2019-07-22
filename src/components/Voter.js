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
                <button className={this.state.voteMod === 1 ? styles.disable_up : styles.enable_up} 
                onClick={()=> this.voteAdder(1)} 
                disabled={this.state.voteMod === 1}><span className={styles.emojiUp}>👍</span></button>
                
                <h3>Votes: {this.props.votes + this.state.voteMod}</h3>
                
                <button className={this.state.voteMod === -1 ? styles.disable_down : styles.enable_down} 
                onClick={()=> this.voteAdder(-1)} 
                disabled={this.state.voteMod === -1} ><span className={styles.emojiDown}>👎</span></button>
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