import { connect } from 'react-redux';
import Portfolio from './portfolio'
import {fetchStock} from '../actions/stock_actions'
import { getTrends } from '../actions/trends_actions'
import * as PortfolioUtil from '../util/portfolio_util';
import { fetchTopArticles } from '../actions/articles_actions'

const msp = state => {
    let trends = state.entities.trends;
    let endDate = new Date;
    let summaryStock = PortfolioUtil.getStockSummaryFromTrades(state.entities.trades, state.entities.trends, endDate);

    let portfolio = [];
    const keys = Object.keys(state.entities.trends);
    if(keys.length > 0) {
        const obj = state.entities.trends[keys[0]];
        for (let i = 0; i < Object.values(obj).length; i++) {
            const element = Object.values(obj)[i];
            let endDate2 = new Date(element.name);
            endDate2 = endDate2.setDate(endDate2.getDate() + 1);
            endDate2 = new Date(endDate2);
            if (i === Object.values(obj).length -1){
                endDate2 = new Date;
            }
            let summaryStock = PortfolioUtil.getStockSummaryFromTrades(state.entities.trades, state.entities.trends, endDate2);
            console.log(summaryStock);
            let value = PortfolioUtil.getPortfolioValue(Object.values(summaryStock));
            let cash = PortfolioUtil.getCashFromBalanceChange(state.entities.balance_changes,endDate2);
            console.log(`end date: ${endDate2} value: ${value+cash}`);
            portfolio.push({ name: element.name, $: value+cash });
        }
    }

    return {
        currentUser: state.session,
        summaryStock: Object.values(summaryStock),
        trends: trends,
        portfolio: portfolio,
        balance_changes: state.entities.balance_changes,
        watches: state.entities.watches

    }
};

const mdp = dispatch => ({
    // fetchStock: (tickerName) => dispatch(fetchStock(tickerName)),
    // getTrends: (tickerName) => dispatch(getTrends(tickerName)),
    fetchTopArticles: () => dispatch(fetchTopArticles())
});

export default connect(msp, mdp)(Portfolio);