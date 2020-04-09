import { connect } from 'react-redux';
import NavBar from './nav_bar';
import {loginUser} from '../actions/session_actions'

const msp = state =>({
    currentUser: state.session
});

const mdp = dispatch => ({
    login: (user) => dispatch(loginUser(user))
});

export default connect(msp,mdp)(NavBar);