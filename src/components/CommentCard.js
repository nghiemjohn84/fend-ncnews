import React from 'react';

const CommentCard = ({comment}) => {
    return (
        <li>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.created_at}</p>
        </li>
    )
}

export default CommentCard