import { combineReducers } from 'redux';

import StocksReducer from './stocks_reducer'
import TrendsReducer from './trends_reducer'
import ArticlesReducer from './articles_reducer'
import TradesReducer from './trades_reducer'
import BalanceChangeReducer from './balance_change_reducer'
import TopArticlesReducer from './top_articles_reducer'

const EntitiesReducer = combineReducers({
    stocks: StocksReducer,
    trends: TrendsReducer,
    articles: ArticlesReducer,
    trades: TradesReducer,
    balance_changes: BalanceChangeReducer,
    top_articles: TopArticlesReducer
})
export default EntitiesReducer;