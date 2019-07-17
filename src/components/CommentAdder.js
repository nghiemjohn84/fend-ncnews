import React from 'react';
import {postComment} from '../api'


class CommentAdder extends React.Component {
    state = {
        body: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target 
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {body} = this.state
        const {article_id, username} = this.props
        postComment(article_id, {body, username})
        .then((newComment) => {
            this.props.addComment(newComment)
        })
        .then(this.setState({
            body: ''
        }))
    }
    
    render() {
        const {body} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="body"> Add Comment:</label>
                <input type="text" name='body' id='body' value={body} onChange={this.handleChange} required/>
                <button>Add Comment</button>
            </form>
        )
    }
}

export default CommentAdder