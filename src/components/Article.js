import React from 'react'
import {Link} from '@reach/router'
import {getArticleByArticleId} from '../api'
import Loading from '../utils/Loading'
import ErrorPage from '../utils/ErrorPage'
import ArticleComment from '../components/ArticleComments'

class Article extends React.Component {
    state = {
        article: {},
        isLoading: true,
        err: null
    }

    componentDidMount() {
        console.log(this.props)
        const {article_id} = this.props
        getArticleByArticleId(article_id)
            .then(article => {
            this.setState({
                article: article, isLoading: false
            })
        })
    }
    
    render() {
        const {article, isLoading, err} = this.state
        if(err) return <ErrorPage err={err} />
        if(isLoading) return <Loading text='Loading article...' />
        return(       
            <div className='article'>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <h4>Author:{article.author}</h4>
                <h4>Topic: {article.topic}</h4>
                <h4>Submitted by: {article.author}</h4>
                <h4>Comments: {article.comment_count}</h4>
                <h4>Votes: {article.votes}</h4>
                <h5>Created at: {article.created_at}</h5>
                <ArticleComment article_id={this.props.article_id}/>
            </div>
        )
    }
}

export default Article