import React from "react";
import { Link } from "@reach/router";
import styles from '../../styles/ArticleCard.module.css'
import dateFormat from '../../utils/DateFormat'
import Voter from '../Voter'

const ArticleCard = ({articles}) => {
    return ( 
        <div>
            <li key={articles.article_id} className={styles.articlaCard}>
                <Link to={`/articles/${articles.article_id}`}>
                <h2>{articles.title}</h2> </Link>
                <h5>{articles.body}</h5>
                <Link to={`/articles/topic/${articles.topic}`}>
                <h5>Topic: {articles.topic}</h5></Link>
                <h4>Author: {articles.author}</h4>
                <h4>Submitted on: {dateFormat(articles.created_at)}</h4> 
                <h4>Comments:{articles.comment_count}</h4>
                <Voter votes={articles.votes} id={articles.article_id} type='article'/>
            </li>
        </div>
    )  
}

export default ArticleCard