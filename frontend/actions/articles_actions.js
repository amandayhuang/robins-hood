import { getArticles, getTopArticles } from '../util/trends_api_util';

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const RECEIVE_TOP_ARTICLES = "RECEIVE_TOP_ARTICLES";

const receiveArticles = (articles, stockId) => {
    return {
    type: RECEIVE_ARTICLES,
    articles: articles.articles,
    stockId
}};

const receiveTopArticles = (articles) => {
    return {
        type: RECEIVE_TOP_ARTICLES,
        top_articles: articles.articles
    }
};

export const fetchArticles = (stockId) => dispatch => {
    return getArticles(stockId)
        .then(articles => dispatch(receiveArticles(articles, stockId)))
};

export const fetchTopArticles = () => dispatch => {
    return getTopArticles()
        .then(articles => dispatch(receiveTopArticles(articles)))
};