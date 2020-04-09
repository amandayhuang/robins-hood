import { RECEIVE_USER, RECEIVE_SIGNUP_ERRORS } from '../actions/session_actions'

const SignupErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return [];
        case RECEIVE_SIGNUP_ERRORS:
            return action.errors.responseJSON;
        default:
            return state;
    }
}

export default SignupErrorsReducer;