import { connect } from 'react-redux';
import Portfolio from './portfolio'
import {fetchStock} from '../actions/stock_actions'
import { getTrends } from '../actions/trends_actions'

const msp = state => {
    let trends = state.entities.trends;
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
    
    if (Object.keys(summaryStock).length === 0){
        summaryStock = {key:"value"}
    }

    if (Object.keys(trends).length === 0){
        trends = {key:[{name:"",$:""}]};
    }

    return {
        currentUser: state.session,
        summaryStock: Object.entries(summaryStock),
        trends: trends
    }
};

const mdp = dispatch => ({
    fetchStock: (tickerName) => dispatch(fetchStock(tickerName)),
    getTrends: (tickerName) => dispatch(getTrends(tickerName))
});

export default connect(msp, mdp)(Portfolio);