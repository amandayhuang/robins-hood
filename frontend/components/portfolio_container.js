import { connect } from 'react-redux';
import Portfolio from './portfolio'
import {fetchStock} from '../actions/stock_actions'
import { getTrends } from '../actions/trends_actions'
import * as PortfolioUtil from '../util/portfolio_util';

const msp = state => {
    let trends = state.entities.trends;
    // let summaryStock = {};
    let endDate = new Date;
    let summaryStock = PortfolioUtil.getStockSummaryFromTrades(state.entities.trades, endDate);

    // for (let i = 0; i < Object.values(state.entities.trades).length; i++) {
    //     const trade = Object.values(state.entities.trades)[i];
    //     if(summaryStock[trade.ticker_name] === undefined){
    //         summaryStock[trade.ticker_name] = trade.quantity
    //     }else{
    //         if(trade.trade_type === 'buy'){
    //             summaryStock[trade.ticker_name] += trade.quantity
    //         }else{
    //             summaryStock[trade.ticker_name] -= trade.quantity
    //         }
    //     }
    // }

    // debugger
    
    // if (Object.keys(summaryStock).length === 0){
    //     summaryStock = {key:"value"}
    // }

    // if (Object.keys(trends).length === 0){
    //     trends = { key: [{ name: "", $: "" }, { name: "", $: "" }]};
    // }

    // summaryStock = Object.entries(summaryStock);
    // summaryStock = summaryStock.filter(item => item[1] > 0);

    return {
        currentUser: state.session,
        // summaryStock: summaryStock,
        summaryStock: Object.values(summaryStock),
        trends: trends
    }
};

const mdp = dispatch => ({
    fetchStock: (tickerName) => dispatch(fetchStock(tickerName)),
    getTrends: (tickerName) => dispatch(getTrends(tickerName))
});

export default connect(msp, mdp)(Portfolio);