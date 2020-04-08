import * as StockAPIUtil from '../util/stock_api_util'
import * as TrendsAPIUtil from '../util/trends_api_util'

export const RECEIVE_STOCK = "RECEIVE_STOCK";

const receiveStock = (stock) =>({
    type: RECEIVE_STOCK,
    stock
});

const receiveTrends = (trends) =>({

});

export const fetchStock = stockId => dispatch =>{
    return StockAPIUtil.fetchStock(stockId)
    .then(stock => dispatch(receiveStock(stock)))
};

export const fetchTrends = displayName => dispatch =>{
    return TrendsAPIUtil.getTrends(displayName)
    .then(trends => receiveTrends(trends))
}