import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer'
import SignupErrorsReducer from './signup_errors_reducer'

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    signup: SignupErrorsReducer
})

export default ErrorsReducer;