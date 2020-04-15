import { createTrade } from  '../actions/trade_actions'
import { connect } from 'react-redux';
import TradeForm from './trade_form'
import { createWatch } from '../actions/watch_actions'
import { deleteWatch } from '../actions/watch_actions'

const msp = (state, ownProps) =>{
    let stock = ownProps.stock;

    return{
    trade: {user_id:"",ticker_name:"", quantity:"",share_price:"", trade_type:"buy"},
    formType: 'Buy',
    userId: state.session.id,
    currentPrice: ownProps.currentPrice,
    word: 'Cost',
    stock: stock,
    verb: 'bought',
    currentUser: state.session,
    watches: state.entities.watches
};}

const mdp = dispatch => ({
    createTrade: trade => dispatch(createTrade(trade)),
    createWatch: watch => dispatch(createWatch(watch)),
    deleteWatch: watchId => dispatch(deleteWatch(watchId))
});

export default connect(msp,mdp)(TradeForm);