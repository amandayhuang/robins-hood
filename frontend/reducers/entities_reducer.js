import { combineReducers } from 'redux';

import StocksReducer from './stocks_reducer'
import TrendsReducer from './trends_reducer'
import ArticlesReducer from './articles_reducer'
import TradesReducer from './trades_reducer'
import BalanceChangeReducer from './balance_change_reducer'
import TopArticlesReducer from './top_articles_reducer'
import WatchesReducer from './watches_reducer'
import NavBarAuthReducer from './nav_bar_auth_reducer'

const EntitiesReducer = combineReducers({
    stocks: StocksReducer,
    trends: TrendsReducer,
    articles: ArticlesReducer,
    trades: TradesReducer,
    balance_changes: BalanceChangeReducer,
    top_articles: TopArticlesReducer,
    watches: WatchesReducer,
    summary: NavBarAuthReducer,
})
export default EntitiesReducer;