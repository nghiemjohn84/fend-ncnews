import React from 'react';
import {postComment} from '../../api'
import styles from '../../styles/CommentAdder.module.css'


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
            <form onSubmit={this.handleSubmit} className={styles.commentAdder}>
                <input type="text" name='body' id='body' placeholder='Share your thoughts...' value={body} onChange={this.handleChange} required/>
                <button>Submit your thoughts</button>
            </form>

        )
    }
}

export default CommentAdder