import React from "react";
import { Link } from "@reach/router";
import styles from '../../styles/ArticleCard.module.css'
import dateFormat from '../../utils/DateFormat'
import Voter from '../Voter'

const ArticleCard = (props) => {
    return (
        <li key={props.articles.article_id}>
            <Link to={`/articles/${props.articles.article_id}`}>
            <h3>{props.articles.title}</h3> </Link>
            <h5>{props.articles.body}</h5>
            <Link to={`/articles/topic/${props.articles.topic}`}>
            <h5>Topic: {props.articles.topic}</h5></Link>
            <h4>Submitted by: {props.articles.author}</h4>
            <h4>Submitted on: {dateFormat(props.articles.created_at)}</h4> 
            <h4>Comments:{props.articles.comment_count}</h4>
            <Voter votes={props.articles.votes} id={props.articles.article_id} type='article'/>
    </li>
    )  
}

export default ArticleCard