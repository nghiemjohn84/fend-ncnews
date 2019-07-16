import React from 'react'
import {getArticle} from '../api'

class Article extends React.Component {
    state = {
        article: {},
        isLoading: true
    }

    componentDidMount() {
        console.log(this.props)
        const {article_id} = this.props
        getArticle(article_id)
            .then(article => {
            this.setState({
                article: article, isLoading: false
            })
        })
    }
    
    render() {
        const {article} = this.state
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
            </div>
        )
    }
}

export default Article