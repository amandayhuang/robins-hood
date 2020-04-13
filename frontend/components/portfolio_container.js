import { connect } from 'react-redux';
import Portfolio from './portfolio'
import {fetchStock} from '../actions/stock_actions'
import { getTrends } from '../actions/trends_actions'
import * as PortfolioUtil from '../util/portfolio_util';

const msp = state => {
    let trends = state.entities.trends;
    let endDate = new Date;
    let summaryStock = PortfolioUtil.getStockSummaryFromTrades(state.entities.trades, state.entities.trends, endDate);

    return {
        currentUser: state.session,
        summaryStock: Object.values(summaryStock),
        trends: trends
    }
};

const mdp = dispatch => ({
    fetchStock: (tickerName) => dispatch(fetchStock(tickerName)),
    getTrends: (tickerName) => dispatch(getTrends(tickerName))
});

export default connect(msp, mdp)(Portfolio);