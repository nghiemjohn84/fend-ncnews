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
        order: 'asc',
        isLoading: true,
        err: null,
        p: 1,
        articleCount: 0
    } 

    componentDidMount() {
        this.fetchArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.topic !== this.props.topic || 
            prevState.sort_by !== this.state.sort_by ||
            prevState.order !== this.state.order ||
            prevState.p !== this.state.p) {
            this.fetchArticles()
        }
    }

    fetchArticles = () =>{
        const {topic} = this.props
        const {sort_by, order, p} = this.state
        getArticles(topic, sort_by, order, p)
        .then(([articles]) => {
            this.setState({
                articles:articles.articles, 
                articleCount: articles.articleCount[0].count,
                isLoading: false,
                err: null
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

    handleChangePage = (value) => {
        const {topic} = this.props
        const {sort_by, order, p} = this.state
        getArticles(topic, sort_by, order, p)
        .then(([articles]) => {
            this.setState({
                articles:articles.articles, 
                p: p + value,
                err: null,
                isLoading: false
            })
        })
    }

    render() {
        const {articles, isLoading, err, p, articleCount} = this.state
        const pageCalc = p * 10
        const finalPage = pageCalc >= articleCount
        if(err) return <ErrorPage err={err} />
        if(isLoading) return <Loading text='loading articles...' />
        return(
            <div>
                <Sorter setSort={this.setSort}/>
                <OrderBy setOrder={this.setOrder} value={this.state.order}/>
                {(!finalPage) && <button onClick={() => this.handleChangePage(1)}>Next Page</button>}
                {(p !== 1) && <button onClick={() => this.handleChangePage(-1)}>Previous Page</button>}
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