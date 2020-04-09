import React from 'react';
import Chart from './chart';
import BuyTradeContainer from './_buy_trade_container'

class StockShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchStock(this.props.match.params.stockId);
        // this.props.fetchTrends('Joe Exotic');
    }

    render(){
        // debugger
        return(
            <div className='show-container'>
                <section className='show-graph'>
                    <h1>{this.props.stock.display_name}</h1>
                    <h3>$100.20</h3>
                <div className='stock-graph'>
                    <Chart />
                </div>
                </section>

                <section className="show-form">
                    <BuyTradeContainer stockId={this.props.stock.id} />
                </section>

            </div>
        )
    }

}

export default StockShow;