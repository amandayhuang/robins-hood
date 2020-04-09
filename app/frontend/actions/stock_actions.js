import * as StockAPIUtil from '../util/stock_api_util'
import getTrends from '../util/trends_api_util'

export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_TRENDS = "RECEIVE_TRENDS";

const receiveStock = (stock) =>({
    type: RECEIVE_STOCK,
    stock
});

const receiveTrends = (trends) =>({
    type: RECEIVE_TRENDS,
    trends
});

export const fetchStock = stockId => dispatch =>{
    return StockAPIUtil.fetchStock(stockId)
    .then(stock => dispatch(receiveStock(stock)))
};

export const fetchTrends = displayName => dispatch =>{
    return getTrends(displayName)
    .then(trends => receiveTrends(trends))
}