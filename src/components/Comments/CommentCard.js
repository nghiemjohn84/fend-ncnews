import React from 'react';
import Voter from '../Voter'
import styles from '../../styles/CommentCard.module.css'
import dateFormat from '../../utils/DateFormat'


const CommentCard = (props) => {
    const {author, votes, created_at, comment_id, body} = props.comments
    return (
        <li className={styles.commentCard} key={comment_id}>
            <p>{body}</p>
            <p>Author: {author}</p>
            <Voter votes={votes} id={comment_id} type='comment'/>
            {<p>Added: {dateFormat(created_at)}</p> }
            {(props.username === author ? 
            <button onClick={() => props.handleDelete(comment_id)}>Delete Comment</button> : '')}
    </li>
    )
}

export default CommentCard 