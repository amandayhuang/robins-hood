import { combineReducers } from 'redux';

import StocksReducer from './stocks_reducer'

const EntitiesReducer = combineReducers({
    stocks: StocksReducer
})
export default EntitiesReducer;