import { createTrade } from  '../actions/trade_actions'
import { connect } from 'react-redux';
import TradeForm from './trade_form'

const msp = (state, ownProps) =>{
    return{
    trade: {user_id:"",stock_id:"", quantity:"",share_price:"14.14", trade_type:"buy"},
    formType: 'Buy',
    userId: state.session.id
};}

const mdp = dispatch => ({
    createTrade: trade => dispatch(createTrade(trade))
});

export default connect(msp,mdp)(TradeForm);