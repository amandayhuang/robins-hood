import React from 'react';
// import Chart from './chart';
import ChartContainer from './chart_container'
import BuyTradeContainer from './_buy_trade_container'

class StockShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchStock(this.props.match.params.stockId);
        this.props.getTrends(this.props.match.params.stockId);
    }

    render(){
        // debugger
        return(
            <>
            <div className='show-container'>
                <section className='show-graph'>
                    <h1>{this.props.stock.display_name}</h1>
                <h3>${this.props.currentPrice}</h3>
                <div className='stock-graph'>
                    <ChartContainer stock={this.props.stock}/>
                </div>
                </section>

                <section className="show-form">
                    <div className='trade-form-header'>
                        <h1>Buy {this.props.stock.ticker_name}</h1>
                        <h1>Sell {this.props.stock.ticker_name}</h1>
                    </div>
                    <div>
                        <BuyTradeContainer stockId={this.props.stock.id} marketPrice={this.props.currentPrice} />
                    </div>
                </section>

            </div>
            </>
        )
    }

}

export default StockShow;