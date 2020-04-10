import { connect } from 'react-redux';
import { fetchStock} from '../actions/stock_actions'
import StockShow from './stock_show'
import {getTrends} from '../actions/trends_actions'
import { fetchArticles } from '../actions/articles_actions'

const msp = (state,ownProps) => {
    const stock = state.entities.stocks[ownProps.match.params.stockId];
    const trends = state.entities.trends[ownProps.match.params.stockId];
    const articles = state.entities.trends[ownProps.match.params.stockId];
    if(trends === undefined){
        return {
            stock: {id:"",display_name:"", ticker_name:""},
            currentPrice: 0
        }
    }else{
        // debugger
        return {
            stock: stock,
            currentPrice: trends[trends.length - 1].$
        }
    }
};

const mdp = (dispatch) => ({
    fetchStock: stockId =>  dispatch(fetchStock(stockId)),
    getTrends: stock => dispatch(getTrends(stock)),
    fetchArticles: stock => dispatch(fetchArticles(stock))
});

export default connect(msp,mdp)(StockShow);