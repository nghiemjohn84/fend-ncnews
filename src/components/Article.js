import React from 'react'
import {getArticleByArticleId} from '../api'
import Loading from '../utils/Loading'
import ErrorPage from '../utils/ErrorPage'
import ArticleComments from '../components/ArticleComments'


class Article extends React.Component {
    state = {
        article: {},
        isLoading: true,
        err: null
    }

    componentDidMount() {
        const {article_id} = this.props
        getArticleByArticleId(article_id)
            .then(article => {
            this.setState({
                article: article, isLoading: false
            })
        }).catch(err => {
            this.setState({err})
        })
    }
    
    render() {
        const {article, isLoading, err} = this.state
        const {loggedInAs, article_id} = this.props
        if(err) return <ErrorPage err={err} />
        if(isLoading) return <Loading text='Loading article...' />
        return(       
            <div className='article'>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <h4>Author:{article.author}</h4>
                <h4>Topic: {article.topic}</h4>
                <h4>Comments: {article.comment_count}</h4>
                <h4>Votes: {article.votes}</h4>
                <h5>Created at: {article.created_at}</h5>
                <button>Like Article</button>
                <button>Dislike Article</button>
                <ArticleComments article_id={article_id} username={loggedInAs}/>
            </div>
        )
    }
}

export default Article