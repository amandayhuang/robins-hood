import * as TradeAPIUtil from '../util/trade_api_util';

export const RECEIVE_TRADES = "RECEIVE_TRADES";
export const RECEIVE_TRADE = "RECEIVE_TRADE";
export const RECEIVE_TRADE_ERRORS = "RECEIVE_TRADE_ERRORS";

const receiveTrades = trades =>({
    type: RECEIVE_TRADES,
    trades
})

const receiveTrade = trade => ({
    type: RECEIVE_TRADE,
    trade
})

const receiveTradeErrors = (errors) => ({
    type: RECEIVE_TRADE_ERRORS,
    errors
});

export const createTrade = (trade) => dispatch =>{
    debugger
    return TradeAPIUtil.createTrade(trade)
    .then(trade => dispatch(receiveTrade(trade)));
}

export const fetchTrades = userId => dispatch => (
    TradeAPIUtil.fetchTrades(userId)
        .then(trades => dispatch(receiveTrades(trades)))
)