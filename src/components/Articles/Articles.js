import React from 'react';
import {getArticles} from '../../api'
import styles from '../../styles/Articles.module.css'
import Loading from '../../utils/Loading'
import ErrorPage from '../../utils/ErrorPage'
import Sorter from '../Sorter'
import OrderBy from '../OrderBy'
import ArticleCard from '../Article/ArticleCard'


class Articles extends React.Component {
    state = {
        articles: [],
        sort_by: 'created_at',
        order: 'desc',
        isLoading: true,
        err: null
    }

    componentDidMount() {
        this.fetchArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.topic !== this.props.topic || 
            prevState.sort_by !== this.state.sort_by ||
            prevState.order !== this.state.order) {
            this.fetchArticles()
        }
    }

    fetchArticles = () =>{
        const {topic} = this.props
        const {sort_by, order} = this.state
        getArticles(topic, sort_by, order)
        .then(({articles}) => {
            this.setState({
                articles, isLoading: false
            })
        }).catch((err) => {
            this.setState({err, isLoading: false})
        })
    }

    setSort = e => {
        const {value} = e.target
        this.setState({sort_by: value})
    }

    setOrder = e => {
        const {value} = e.target
        this.setState({order: value})
    }


    render() {
        const {articles, isLoading, err} = this.state
        if(err) return <ErrorPage err={err} />
        if(isLoading) return <Loading text='loading articles...' />
        return(
            <div>
                <Sorter setSort={this.setSort}/>
                <OrderBy setOrder={this.setOrder} value={this.state.order}/>
                <ul className={styles.articleList}>
                    {articles.map(article => {
                        return(
                            <ArticleCard articles={article} key={article.article_id}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Articles