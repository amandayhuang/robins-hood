import { connect } from 'react-redux';
import NavBarAuth from './nav_bar_auth';
import { logoutUser } from '../actions/session_actions'
import { fetchTrades } from '../actions/trade_actions'
import { fetchBalanceChanges } from '../actions/balance_change_actions'
import { fetchWatches } from '../actions/watch_actions'
import { fetchStock, fetchAllStocks } from '../actions/stock_actions'
import { getTrends } from '../actions/trends_actions'

const msp = state => {
    let balance_changes = state.entities.balance_changes;
    let watches = state.entities.watches;
    let trades = state.entities.trades;
    let trends = state.entities.trends;
    let stocks = state.entities.stocks;
    // if (Object.values(state.entities.balance_changes).length === 0) {
    //     bc = [{ amount: "" }];
    // }

    return {
        currentUser: state.session,
        balance_changes: balance_changes,
        watches: watches,
        trends: trends,
        trades: trades,
        stocks: stocks
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logoutUser()),
    fetchTrades: (userId) => dispatch(fetchTrades(userId)),
    fetchBalanceChanges: (userId) => dispatch(fetchBalanceChanges(userId)),
    fetchWatches: (userId) => dispatch(fetchWatches(userId)),
    fetchStock: (tickerName) => dispatch(fetchStock(tickerName)),
    getTrends: (tickerName) => dispatch(getTrends(tickerName)),
    fetchAllStocks: () => dispatch(fetchAllStocks())
});

export default connect(msp, mdp)(NavBarAuth);

