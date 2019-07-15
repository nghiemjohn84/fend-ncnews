import React from 'react';
import {getArticles} from '../api'
import '../styles/articles.css'


class Articles extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        getArticles()
        .then(article => {
            this.setState({
                articles: article
            })
        })
    }


    render() {
        const {articles} = this.state
        console.log(articles)
        return(
            <div className='articles'>
                <ul>
                    {articles.map(article => {
                        return(
                            <li className='articleBox' key={article.article_id}>
                                <h3>{article.title}</h3>
                                <h5>{article.body}</h5>
                                <h5>Topic: {article.title}</h5>
                                <h4>Submitted by: {article.author}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Articles