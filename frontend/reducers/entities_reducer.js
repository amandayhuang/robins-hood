import { combineReducers } from 'redux';

import StocksReducer from './stocks_reducer'
import TrendsReducer from './trends_reducer'
import ArticlesReducer from './articles_reducer'

const EntitiesReducer = combineReducers({
    stocks: StocksReducer,
    trends: TrendsReducer,
    articles: ArticlesReducer
})
export default EntitiesReducer;