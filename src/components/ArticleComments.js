import React from 'react';
import {getArticleComments} from '../api'

class ArticleComments extends React.Component {
    state = {
        articleComments: []
    }

    componentDidMount() {
        const {article_id} = this.props
        getArticleComments(article_id)
        .then(comments => {
            this.setState({
                articleComments: comments
            })
        })
    }

    render() {
        const {articleComments} = this.state
        console.log(articleComments)
        return (
            <div className='comments'>
                <h1>Article Comments</h1>
                <ul>
                    {articleComments.map(comment => {
                        return (
                            <li key={comment.comment_id}>
                                {comment.body}
                                <p>Author: {comment.author}</p>
                                <p>Added:</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default ArticleComments