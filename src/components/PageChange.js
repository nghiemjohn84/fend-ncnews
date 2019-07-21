import React from 'react'

const PageChanger = (props) => {
    const {p, finalPage, setPage} = props
    return (
        <div>
            <button onClick={() => setPage(p + 1)} disabled={(finalPage)}>Next Page</button>
                <p>Page: {p}</p>
                <button onClick={() => setPage(p + -1)} disabled={(p === 1)}>Previous Page</button>
                </div>
    )
}

export default PageChanger