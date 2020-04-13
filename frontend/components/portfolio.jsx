import React from 'react';
import SummaryStockItem from './summary_stock_item';
import * as PortfolioUtil from '../util/portfolio_util';
import ChartContainer from './chart_container';

class Portfolio extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        for (let i = 0; i < this.props.currentUser.owned_stock_ids.length; i++) {
            const tickerName = this.props.currentUser.owned_stock_ids[i];
            const found = this.props.trends[this.props.currentUser.owned_stock_ids[i]];
            if(found === undefined){
                this.props.fetchStock(tickerName);
                this.props.getTrends(tickerName);
            }
        }
    }

    render() {
        let currentPortfolioValue = PortfolioUtil.getPortfolioValue(this.props.summaryStock);
        let endDate = new Date;
        let cash = PortfolioUtil.getCashFromBalanceChange(this.props.balance_changes,endDate)
        let fakeStock = {display_name:"", ticker_name:""};

        return (
            <>
                <div className='show-container'>
                    <section className='show-graph'>
                        {/* <h1>Portfolio {currentPortfolioValue}</h1> */}
                        {/* <h3 className='top-price'>${this.props.currentPrice.toFixed(2)}</h3> */}
                        <div className='stock-graph'>
                            <ChartContainer stock={fakeStock} currentPrice={currentPortfolioValue+cash} portfolioTrends={this.props.portfolio} type="portfolio" />
                        </div>
                        <div className='news-list'>
                            {/* <ArticlesContainer stock={this.props.stock} /> */}
                        </div>
                    </section>

                    <section className="show-form scrollable">
                        <div className='trade-form-header'>
                            <h1>Stocks</h1>
                        </div>
      
                           <div className="portfolio-stocks">
                               {
                                   this.props.summaryStock.map( stock => (
                                       <SummaryStockItem key={stock.ticker_name} stock={stock} stockTrends={this.props.trends}/> 
                                   ))
                               }
                            </div>

                        <div className='trade-form-header'>
                            <h1>Watches</h1>
                        </div>
                
                    </section>

                </div>
            </>
        )
    }

}

export default Portfolio;