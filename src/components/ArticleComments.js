import React from 'react';
import {getArticleComments, deleteCommentById} from '../api'
import CommentAdder from './CommentAdder'
import Loading from '../utils/Loading'
import ErrorPage from '../utils/ErrorPage'
// import CommentCard from './CommentCard'
import Voter from '../components/Voter'



class ArticleComments extends React.Component {
    state = {
        comments: [],
        isLoading: true,
        err: null
    }

    componentDidMount() {
        this.getComments()
    }

    getComments = () => {
        const {article_id} = this.props
        getArticleComments(article_id)
        .then(comments => {
            this.setState({
                comments: comments, isLoading: false
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.comments !== this.state.comments) {
            this.getComments()
        }
    }

    addComment = commentToAdd => {
        this.setState(({comments}) => {
            return {comments: [commentToAdd, ...comments]}
        })
    }

    handleDelete = (id) => {
        deleteCommentById(id)
    }
    
    render() {
        const {comments, isLoading, err} = this.state
        const {article_id, username} = this.props
        if(err) return <ErrorPage err={err} />
        if(isLoading) return <Loading text='Loading comments...' />
        return (
            <div>
                <CommentAdder addComment={this.addComment} article_id={article_id} username={username}/>
                <h3>Submitted Comments:</h3>
                <ul className='article-comments'> 
                    {comments.map(comment => {
                        return (
                            <li key={comment.comment_id}>
                                {comment.body}
                                <p>Author: {comment.author}</p>
                                <p>Votes: {comment.votes}</p>
                                <Voter votes={comment.votes} id={comment.comment_id} type='comment'/>
                                {/* <p>Added:</p> */}
                                {(username === comment.author ? 
                                <button onClick={() => this.handleDelete(comment.comment_id)}>Delete Comment</button> : '')}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default ArticleComments