import {RECEIVE_STOCK} from '../actions/stock_actions';

const StocksReducer = (state={}, action) =>{
    Object.freeze(state);
    let newState = {};
    switch(action.type){
        case RECEIVE_STOCK:
            debugger
            newState = Object.assign({},state);
            newState[action.stock.id] = action.stock;
            return newState;
        default:
            return state;
    }
}

export default StocksReducer;