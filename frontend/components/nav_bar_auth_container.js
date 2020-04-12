import { connect } from 'react-redux';
import NavBarAuth from './nav_bar_auth';
import { logoutUser } from '../actions/session_actions'
import { fetchTrades } from '../actions/trade_actions'

const msp = state => ({
    currentUser: state.session
});

const mdp = dispatch => ({
    logout: () => dispatch(logoutUser()),
    fetchTrades: (userId) => dispatch(fetchTrades(userId))
});

export default connect(msp, mdp)(NavBarAuth);