import {RECEIVE_STOCK, RECEIVE_ALL_STOCKS} from '../actions/stock_actions';

const StocksReducer = (state={}, action) =>{
    Object.freeze(state);
    let newState = {};
    switch(action.type){
        case RECEIVE_STOCK:
            // debugger
            newState = Object.assign({},state);
            newState[action.stock.ticker_name] = action.stock;
            return newState;
        case RECEIVE_ALL_STOCKS:
            return action.stocks;
        default:
            return state;
    }
}

export default StocksReducer;