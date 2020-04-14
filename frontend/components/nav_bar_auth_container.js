import { connect } from 'react-redux';
import NavBarAuth from './nav_bar_auth';
import { logoutUser } from '../actions/session_actions'
import { fetchTrades } from '../actions/trade_actions'
import { fetchBalanceChanges } from '../actions/balance_change_actions'

const msp = state => {
    let bc = state.entities.balance_changes;
    if (Object.values(state.entities.balance_changes).length === 0) {
        bc = [{ amount: "" }];
    }

    return {
        currentUser: state.session,
        balance_changes: bc
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logoutUser()),
    fetchTrades: (userId) => dispatch(fetchTrades(userId)),
    fetchBalanceChanges: (userId) => dispatch(fetchBalanceChanges(userId))
});

export default connect(msp, mdp)(NavBarAuth);

