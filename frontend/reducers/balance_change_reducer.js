import { RECEIVE_BALANCE_CHANGES } from '../actions/balance_change_actions'


export default (state = {}, action) => {
    Object.freeze(state);
    // let newState = {};
    switch (action.type) {
        case RECEIVE_BALANCE_CHANGES:
            return action.balance_changes
        default:
            return state;
    }
}