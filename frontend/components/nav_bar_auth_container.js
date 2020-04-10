import { connect } from 'react-redux';
import NavBarAuth from './nav_bar_auth';
import { logoutUser} from '../actions/session_actions'

const msp = state => ({
    currentUser: state.session
});

const mdp = dispatch => ({
    logout: () => dispatch(logoutUser())
});

export default connect(msp, mdp)(NavBarAuth);