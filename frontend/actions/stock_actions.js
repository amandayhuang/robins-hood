import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_ALL_STOCKS = "RECEIVE_ALL_STOCKS";

const receiveStock = (stock) =>({
    type: RECEIVE_STOCK,
    stock
});

const receiveAllStocks = (stocks) => ({
    type: RECEIVE_ALL_STOCKS,
    stocks
});


export const fetchStock = stockId => dispatch =>{
    return StockAPIUtil.fetchStock(stockId)
    .then(stock => dispatch(receiveStock(stock)));
};

export const fetchAllStocks = () => dispatch => {
    return StockAPIUtil.fetchAllStocks()
        .then(stocks => dispatch(receiveAllStocks(stocks)));
};