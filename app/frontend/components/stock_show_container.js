import { connect } from 'react-redux';
import { fetchStock } from '../actions/stock_actions'
import StockShow from './stock_show'

const msp = (state,ownProps) => {
    const stock = state.entities.stocks[ownProps.match.params.stockId];
    if(stock === undefined){
        return {
            stock: {id:"",display_name:"", ticker_name:""}
        }
    }else{
        return {
            stock: stock
        }
    }
};

const mdp = (dispatch) => ({
    fetchStock: stockId =>  dispatch(fetchStock(stockId))
});

export default connect(msp,mdp)(StockShow);