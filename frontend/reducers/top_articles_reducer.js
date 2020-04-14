import { RECEIVE_TOP_ARTICLES } from '../actions/articles_actions';

const TopArticlesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TOP_ARTICLES:
            return action.top_articles;
        default:
            return state;
    }
}

export default TopArticlesReducer;