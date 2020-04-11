import { RECEIVE_ARTICLES } from '../actions/articles_actions';

const ArticlesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_ARTICLES:
            newState = Object.assign({}, state);
            newState[action.stockId] = action.articles;
            return newState;
        default:
            return state;
    }
}

export default ArticlesReducer;