import { connect } from 'react-redux';
import Portfolio from './portfolio'
import {fetchStock} from '../actions/stock_actions'

const msp = state => {
    
    let summaryStock = {};

    for (let i = 0; i < Object.values(state.entities.trades).length; i++) {
        const trade = Object.values(state.entities.trades)[i];
        if(summaryStock[trade.ticker_name] === undefined){
            summaryStock[trade.ticker_name] = trade.quantity
        }else{
            if(trade.trade_type === 'buy'){
                summaryStock[trade.ticker_name] += trade.quantity
            }else{
                summaryStock[trade.ticker_name] -= trade.quantity
            }
        }
    }
    
    debugger
    if (Object.keys(summaryStock).length === 0){
        summaryStock = {key:"value"}
    }

    return {
    currentUser: state.session,
    summaryStock: Object.entries(summaryStock)
    }
};

const mdp = dispatch => ({
    fetchStock: (tickerName) => dispatch(fetchStock(tickerName))
});

export default connect(msp, mdp)(Portfolio);