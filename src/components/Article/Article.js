import React from 'react'
import {getArticleByArticleId} from '../../api'
import Loading from '../../utils/Loading'
import ErrorPage from '../../utils/ErrorPage'
import ArticleComments from '../Comments/ArticleComments'
import Voter from '../Voter'
import dateFormat from '../../utils/DateFormat'
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
            this.setState({err, isLoading: false})
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
            <div className={styles.singleArticle}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
                <h4>Author:{article.author}</h4>
                <h4>Topic: {article.topic}</h4>
                <h4>Comments: {article.comment_count}</h4>
                <h4>Submitted on: {dateFormat(article.created_at)}</h4> 
                <Voter className={styles.singleArticleVoter} votes={article.votes} id={article.article_id} type='article'/>
                <ArticleComments article_id={article_id} username={loggedInAs}/>
            </div>
        )
    }
}

export default Article