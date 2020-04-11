import React from 'react';
import ReactDOM from 'react-dom';
// import Chart from './chart';
import ChartContainer from './chart_container'
import BuyTradeContainer from './_buy_trade_container'
import SellTradeContainer from './_sell_trade_container'
import ArticlesContainer from './articles_container'

class StockShow extends React.Component{
    constructor(props){
        super(props);
        this.toggleTabs = this.toggleTabs.bind(this);
    }

    componentDidMount(){
        this.props.fetchStock(this.props.match.params.stockId);
        this.props.getTrends(this.props.match.params.stockId);
        this.props.fetchArticles(this.props.match.params.stockId);
    }

    toggleTabs(e){
        const buyHeader = ReactDOM.findDOMNode(this.refs.buyHeader);
        buyHeader.classList.toggle('active-tab');

        const sellHeader = ReactDOM.findDOMNode(this.refs.sellHeader);
        sellHeader.classList.toggle('active-tab');

        const buyForm = ReactDOM.findDOMNode(this.refs.buyForm);
        buyForm.classList.toggle('active');

        const sellForm = ReactDOM.findDOMNode(this.refs.sellForm);
        sellForm.classList.toggle('active');
    }

    render(){
        // debugger
        return(
            <>
            <div className='show-container'>
                <section className='show-graph'>
                    <h1>{this.props.stock.display_name}</h1>
                    {/* <h3 className='top-price'>${this.props.currentPrice.toFixed(2)}</h3> */}
                <div className='stock-graph'>
                    <ChartContainer stock={this.props.stock} currentPrice={this.props.currentPrice}/>
                </div>
                <div className='news-list'>
                     <ArticlesContainer stock={this.props.stock}/>
                </div>
                </section>

                <section className="show-form">
                    <div className='trade-form-header'>
                        <h1 ref="buyHeader" onClick={this.toggleTabs} className="active-tab">Buy {this.props.stock.ticker_name}</h1>
                        <h1 ref="sellHeader" onClick={this.toggleTabs}> Sell {this.props.stock.ticker_name}</h1>
                    </div>
                    <div className="form-tab">
                        <div className="sell-form" ref="sellForm">
                            <SellTradeContainer stock={this.props.stock} currentPrice={this.props.currentPrice} />
                        </div>
                        <div className="buy-form active" ref="buyForm">
                            <BuyTradeContainer stock={this.props.stock} currentPrice={this.props.currentPrice} />
                        </div>
                        
                    </div>
                </section>

            </div>
            </>
        )
    }

}

export default StockShow;