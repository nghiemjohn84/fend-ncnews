import React from 'react';
import Voter from '../Voter'
import styles from '../../styles/CommentCard.module.css'
import dateFormat from '../../utils/DateFormat'


const CommentCard = (props) => {
    return (
        <li key={props.comments.comment_id}>
            {props.comments.body}
            <p>Author: {props.comments.author}</p>
            <p>Votes: {props.comments.votes}</p>
            <Voter votes={props.comments.votes} id={props.comments.comment_id} type='comment'/>
            {<p>Added: {dateFormat(props.comments.created_at)}</p> }
            {(props.username === props.comments.author ? 
            <button onClick={() => props.handleDelete(props.comments.comment_id)}>Delete Comment</button> : '')}
    </li>
    )
}

export default CommentCard