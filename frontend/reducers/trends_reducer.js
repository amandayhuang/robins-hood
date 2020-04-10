import { RECEIVE_TRENDS } from '../actions/trends_actions';

const TrendsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_TRENDS:
            // debugger
            newState = Object.assign({}, state);
            newState[action.stockId] = action.trends;
            return newState;
        default:
            return state;
    }
}

export default TrendsReducer;