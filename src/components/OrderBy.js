import React from 'react';

const OrderBy = () => {
    return (
        <select>
            <option value="created_at">Sort by Date</option>
            <option value="comment_count">Sort by Comments</option>
        </select>
    )
}

export default OrderBy