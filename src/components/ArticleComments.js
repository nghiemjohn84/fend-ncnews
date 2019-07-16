import React from 'react';
import {getArticleComments} from '../api'
import '../styles/ArticleComments.css'
import CommentAdder from './CommentAdder'
import Loading from '../utils/Loading'
import ErrorPage from '../utils/ErrorPage'
import CommentCard from './CommentCard'



class ArticleComments extends React.Component {
    state = {
        comments: [],
        isLoading: true,
        err: null
    }

    componentDidMount() {
        const {article_id} = this.props
        getArticleComments(article_id)
        .then(comments => {
            this.setState({
                comments: comments, isLoading: false
            })
        })
        .catch(err => {
            this.setState({err})
        })
    }

    addComment = commentToAdd => {
        this.setState(({comments}) => {
            return {comments: [commentToAdd, ...comments]}
        })
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
                <ul>
                    {comments.map(comment => {
                        return (
                            <CommentCard comment={comment} key={comment.comment_id} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default ArticleComments