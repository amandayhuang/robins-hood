import { connect } from 'react-redux';
import { getTrends } from '../actions/trends_actions'
import Chart from './chart'

const msp = (state, ownProps) => {
    let trends = state.entities.trends[ownProps.stock.ticker_name];
    if(ownProps.type === 'portfolio'){
        trends = ownProps.portfolioTrends;
    }
    debugger
    if(trends === undefined || trends.length === 0){
        return {
            trends: [
                {
                    name: 'March 1', $: 240
                },
                {
                    name: 'March 2', $: 139
                },
                {
                    name: 'March 3', $: 980
                },
            ],
            stock: {id:"",display_name:""}
        }
    }else{
        return {
            trends: trends,
            stock: ownProps.stock
        }
    }
};

const mdp = (dispatch) => ({
    getTrends: displayName => dispatch(getTrends(displayName))
});

export default connect(msp, mdp)(Chart);