import { connect } from 'react-redux';
import {signupUser} from '../actions/session_actions'
import SignupForm from './signup_form';

const msp = state =>{
// debugger
return {
    user: {email:"",password:"",first_name:"",last_name:""},
    errors: state.errors.signup
}};

const mdp = dispatch => ({
    createUser: (user) => dispatch(signupUser(user))
});

export default connect(msp,mdp)(SignupForm);