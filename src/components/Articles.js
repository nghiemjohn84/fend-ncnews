import React from 'react';
import {getArticles} from '../api'
import '../styles/Articles.css'
import {Link} from '@reach/router'


class Articles extends React.Component {
    state = {
        articles: [],
        loading: true
    }

    componentDidMount() {
        this.fetchArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.topic !== this.props.topic) {
            this.fetchArticles()
        }
    }

    fetchArticles = () =>{
        getArticles(this.props)
        .then((articles) => {
            this.setState({
                articles, loading: false
            })
        })
    }

    render() {
        const {articles} = this.state
        return(
            <div>
                <ul>
                    {articles.map(article => {
                        return(
                            <li className='articleBox' key={article.article_id}>
                                <Link to={`/articles/${article.article_id}`}>
                                   <h3>{article.title}</h3> </Link>
                                <h5>{article.body}</h5>
                                <Link to={`/articles/topic/${article.topic}`}>
                                <h5>Topic: {article.topic}</h5></Link>
                                <h4>Submitted by: {article.author}</h4>
                                <h4>Submitted on: {article.created_at}</h4>
                                <h4>Comments:{article.comment_count}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Articles