import { connect } from 'react-redux';
import { loginUser } from '../actions/session_actions'
import LoginForm from './login_form';

const msp = state => ({
    user: { email: "", password: ""},
    errors: state.errors.session
});

const mdp = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
});

export default connect(msp, mdp)(LoginForm);