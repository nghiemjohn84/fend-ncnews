import axios from 'axios'

const BASE_URL = 'https://nc-news-jn.herokuapp.com/api'

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

