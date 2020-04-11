import { getArticles } from '../util/trends_api_util';

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";

const receiveArticles = (articles, stockId) => {
    debugger
    return {
    type: RECEIVE_ARTICLES,
    articles: articles.articles,
    stockId
}};

export const fetchArticles = (stockId) => dispatch => {
    return getArticles(stockId)
        .then(articles => dispatch(receiveArticles(articles, stockId)))
};