import React from 'react';

const OrderBy = (props) => {
    return (
        <select onChange={props.setOrder}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    )
}

export default OrderBy