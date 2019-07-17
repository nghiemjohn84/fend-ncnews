import React from 'react';
import {addVote} from '../api'

class Voter extends React.Component {
    state = {
        voteMod: 0,
        err: null
    }

    render() {
        return(
            <div>
                <button onClick={()=> this.voteAdder(1)}>UP</button>
                <button onClick={()=> this.voteAdder(-1)}>DOWN</button>
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