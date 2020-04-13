import { combineReducers } from 'redux';

import StocksReducer from './stocks_reducer'
import TrendsReducer from './trends_reducer'
import ArticlesReducer from './articles_reducer'
import TradesReducer from './trades_reducer'
import PortfolioReducer from './portfolio_reducer'
import BalanceChangeReducer from './balance_change_reducer'

const EntitiesReducer = combineReducers({
    stocks: StocksReducer,
    trends: TrendsReducer,
    articles: ArticlesReducer,
    trades: TradesReducer,
    portfolio: PortfolioReducer,
    balance_changes: BalanceChangeReducer
})
export default EntitiesReducer;