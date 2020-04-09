import {RECEIVE_STOCK, RECEIVE_TRENDS} from '../actions/stock_actions';

const StocksReducer = (state={}, action) =>{
    Object.freeze(state);
    let newState = {};
    switch(action.type){
        case RECEIVE_STOCK:
            // debugger
            newState = Object.assign({},state);
            newState[action.stock.id] = action.stock;
            return newState;
        case RECEIVE_TRENDS:
            newState = Object.assign({}, state);
            newState[this.props.match.params.stockId]["prices"] = action.trends;
            return newState;
        default:
            return state;
    }
}

export default StocksReducer;