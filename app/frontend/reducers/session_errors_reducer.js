import {RECEIVE_USER,RECEIVE_SESSION_ERRORS} from '../actions/session_actions'

const SessionErrorsReducer = (state={},action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors.responseJSON;
        default:
            return state;
    }
}

export default SessionErrorsReducer;