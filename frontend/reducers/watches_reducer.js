import { RECEIVE_WATCHES, RECEIVE_WATCH } from '../actions/watch_actions'


export default (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_WATCH:
            newState = Object.assign({}, state);
            newState[action.watch.id] = action.watch;
            return newState;
        case RECEIVE_WATCHES:
            return action.watches
        default:
            return state;
    }
}