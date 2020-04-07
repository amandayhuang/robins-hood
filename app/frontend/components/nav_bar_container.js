import { connect } from 'react-redux';
import NavBar from './nav_bar';
import {logoutUser, loginUser} from '../actions/session_actions'

const msp = state =>({
    currentUser: state.session
});

const mdp = dispatch => ({
    logout: () => dispatch(logoutUser()),
    login: (user) => dispatch(loginUser(user))
});

export default connect(msp,mdp)(NavBar);