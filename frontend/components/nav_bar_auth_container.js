import { connect } from 'react-redux';
import NavBarAuth from './nav_bar_auth';
import { logoutUser } from '../actions/session_actions'
import { fetchTrades } from '../actions/trade_actions'
import { fetchBalanceChanges } from '../actions/balance_change_actions'
import { fetchWatches } from '../actions/watch_actions'
import { fetchStock } from '../actions/stock_actions'
import { getTrends } from '../actions/trends_actions'

const msp = state => {
    let bc = state.entities.balance_changes;
    let watches = state.entities.watches;
    let trades = state.entities.trades;
    let trends = state.entities.trends;
    if (Object.values(state.entities.balance_changes).length === 0) {
        bc = [{ amount: "" }];
    }

    return {
        currentUser: state.session,
        balance_changes: bc,
        watches: watches,
        trends: trends,
        trades: trades
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logoutUser()),
    fetchTrades: (userId) => dispatch(fetchTrades(userId)),
    fetchBalanceChanges: (userId) => dispatch(fetchBalanceChanges(userId)),
    fetchWatches: (userId) => dispatch(fetchWatches(userId)),
    fetchStock: (tickerName) => dispatch(fetchStock(tickerName)),
    getTrends: (tickerName) => dispatch(getTrends(tickerName))
});

export default connect(msp, mdp)(NavBarAuth);

