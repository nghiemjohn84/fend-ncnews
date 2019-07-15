import axios from 'axios'

const BASE_URL = 'https://nc-news-jn.herokuapp.com/api'

export const getArticles = () => {
    return axios
        .get(`${BASE_URL}/articles`)
        .then(data => {
            return data.data.articles
        })
}

