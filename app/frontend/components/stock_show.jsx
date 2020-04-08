import React from 'react';
// import { fetchStock } from '../actions/stock_actions'

class StockShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchStock(this.props.match.params.stockId);
    }

    render(){
        // debugger
        return(
            <div>
                <h1>{this.props.stock.display_name}</h1>
                blah
            </div>
        )
    }

}

export default StockShow;