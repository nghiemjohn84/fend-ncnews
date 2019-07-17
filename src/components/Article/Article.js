import React from 'react'
import {getArticleByArticleId} from '../../api'
import Loading from '../../utils/Loading'
import ErrorPage from '../../utils/ErrorPage'
import ArticleComments from '../Comments/ArticleComments'
import Voter from '../Voter'
import styles from '../../styles/Article.module.css'


class Article extends React.Component {
    state = {
        article: {},
        isLoading: true,
        err: null
    }

    componentDidMount() {
        this.fetchArticleById()
    }

    fetchArticleById = () => {
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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topic !== this.props.topic) {
          this.fetchArticle();
        }
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
                <Voter votes={article.votes} id={article.article_id} type='article'/>
                {/* <h5>Created at: {article.created_at}</h5> */}
                <ArticleComments article_id={article_id} username={loggedInAs}/>
            </div>
        )
    }
}

export default Article