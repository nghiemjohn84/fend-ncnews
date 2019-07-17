import React from 'react';

const Sorter = (props) => {
    return (
        <select onChange={props.setSort}>
            <option value="created_at">Sort by Date</option>
            <option value="comment_count">Sort by Comments</option>
            <option value="votes">Sort by Votes</option>
        </select>
    )
}

export default Sorter