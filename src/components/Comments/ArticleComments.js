import React from 'react';
import {getArticleComments, deleteCommentById} from '../../api'
import styles from '../../styles/ArticleComments.module.css'
import CommentAdder from './CommentAdder'
import Loading from '../../utils/Loading'
import ErrorPage from '../../utils/ErrorPage'
import CommentCard from '../Comments/CommentCard'

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
        if(prevState.comments.comment_id !== this.state.comments.comment_id) {
            this.getComments()
        }
    }

    addComment = commentToAdd => {
        this.setState(({comments}) => {
            return {comments: [commentToAdd, ...comments]}
        })
    }

    handleDelete = (comment_id) => {
        deleteCommentById(comment_id)
        this.setState({ comments: this.state.comments.filter(comment => comment.comment_id !== comment_id) })
      };
    
    render() {
        const {comments, isLoading, err} = this.state
        const {article_id, username} = this.props
        if(err) return <ErrorPage err={err} />
        if(isLoading) return <Loading text='Loading comments...' />
        return (
            <div>
                <CommentAdder addComment={this.addComment} article_id={article_id} username={username}/>
                <h3>Submitted Comments:</h3>
                <ul> 
                    {comments.map(comment => {
                        return (
                            <CommentCard key={comment.comment_id} comments={comment} handleDelete={this.handleDelete} username={username}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default ArticleComments