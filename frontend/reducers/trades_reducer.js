import { RECEIVE_TRADES, RECEIVE_TRADE } from '../actions/trade_actions'


export default (state = {}, action) => {
    Object.freeze(state);
    let newState= {};
    switch (action.type) {
        case RECEIVE_TRADE:
            newState = Object.assign({},state);
            newState[action.trade.id] = action.trade;
            return newState;
        case RECEIVE_TRADES:
            return action.trades
        default:
            return state;
    }
}