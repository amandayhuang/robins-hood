import {getNews} from '../util/trends_api_util';

export const RECEIVE_TRENDS = "RECEIVE_TRENDS";

const receiveTrends = (trends, stockId) => ({
    type: RECEIVE_TRENDS,
    trends,
    stockId
});

export const getTrends = (stockId) => dispatch => {
    // const temp = getNews(displayName);
    // debugger
    return Promise.all(getNews(stockId))
        .then(trends => dispatch(receiveTrends(trends,stockId)))
};