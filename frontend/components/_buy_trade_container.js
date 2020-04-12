import { createTrade } from  '../actions/trade_actions'
import { connect } from 'react-redux';
import TradeForm from './trade_form'

const msp = (state, ownProps) =>{
    return{
    trade: {user_id:"",ticker_name:"", quantity:"",share_price:"", trade_type:"buy"},
    formType: 'Buy',
    userId: state.session.id,
    currentPrice: ownProps.currentPrice,
    word: 'Cost',
    stock: ownProps.stock,
    verb: 'bought'
};}

const mdp = dispatch => ({
    createTrade: trade => dispatch(createTrade(trade))
});

export default connect(msp,mdp)(TradeForm);