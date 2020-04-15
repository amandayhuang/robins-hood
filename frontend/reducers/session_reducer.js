import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions'
import { RECEIVE_WATCH, REMOVE_WATCH } from '../actions/watch_actions'

const _nullSession = {}

export default (state = _nullSession, action) => {
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_USER:
            return action.user;
        case RECEIVE_WATCH:
            newState = Object.assign({},state);
            newState.watched_stock_ids.push(action.watch.ticker_name);
            return newState;
        case REMOVE_WATCH:
            newState = Object.assign({}, state);
            const index = newState.watched_stock_ids.indexOf(action.watch.ticker_name)
            delete newState.watched_stock_ids[element];
            return newState;
        case LOGOUT_USER:
            return _nullSession
        default:
            return state;
    }
}