import axios from 'axios'

const BASE_URL = 'https://nc-news-jn.herokuapp.com/ap'

export const getArticles = ({topic}) => {
    return axios
        .get(`${BASE_URL}/articles`, {
            params: {
                topic
            }
        })
        .then(({data}) => {
            return data.articles
        })
}

export const getArticleByArticleId = (article_id) => {
    return axios
        .get(`${BASE_URL}/articles/${article_id}`)
        .then(({data}) => {
            return data.article
        })
}

