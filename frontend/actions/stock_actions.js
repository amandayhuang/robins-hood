import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = "RECEIVE_STOCK";

const receiveStock = (stock) =>({
    type: RECEIVE_STOCK,
    stock
});


export const fetchStock = stockId => dispatch =>{
    return StockAPIUtil.fetchStock(stockId)
    .then(stock => dispatch(receiveStock(stock)));
};



// export const getTrends = stockId => dispatch => {
//     return StockAPIUtil.findTrends(stockId)
//         .then(stock => dispatch(receiveStock(stock)));
// };