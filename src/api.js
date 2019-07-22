import axios from 'axios'

const BASE_URL = 'https://nc-news-jn.herokuapp.com/api'

export const getArticles = async (topic, sort_by, order, p)=> {
    const {data} = await axios.get(`${BASE_URL}/articles`, {
            params: {
                topic,
                sort_by,
                order,
                p
            }
    })
    return data
}

export const getArticleByArticleId = async article_id => {
    const {data} = await axios.get(`${BASE_URL}/articles/${article_id}`)
    return data.article
}

export const getArticleComments = async article_id => {
    const {data} = await axios.get(`${BASE_URL}/articles/${article_id}/comments`)
    return data.comments
}

export const postComment = async (article_id, newComment )=> {
    const {data} = await axios.post(`${BASE_URL}/articles/${article_id}/comments`, newComment)
    return data.comment
}

export const deleteCommentById = async comment_id => {
    return axios.delete(`${BASE_URL}/comments/${comment_id}`)
}

export const addVote = async (type, id, inc) => {
    const {data} = await axios.patch(`${BASE_URL}/${type}s/${id}`, {inc_votes: inc})
    return data
}