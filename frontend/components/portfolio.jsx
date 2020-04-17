import React from 'react';
import SummaryStockItem from './summary_stock_item';
import * as PortfolioUtil from '../util/portfolio_util';
import ChartContainer from './chart_container';
import TopArticlesContainer from './top_articles_container'

class Portfolio extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // for (let i = 0; i < this.props.currentUser.owned_stock_ids.length; i++) {
        //     const tickerName = this.props.currentUser.owned_stock_ids[i];
        //     const found = this.props.trends[this.props.currentUser.owned_stock_ids[i]];
        //     if(found === undefined){
        //         this.props.fetchStock(tickerName);
        //         this.props.getTrends(tickerName);
        //     }
        // }
        this.props.fetchTopArticles();
    }

    render() {
        let currentPortfolioValue = PortfolioUtil.getPortfolioValue(this.props.summaryStock);
        let cash = PortfolioUtil.getCashFromBalanceChange(this.props.balance_changes, new Date)
        let fakeStock = {display_name:"", ticker_name:""};

        let summaryWatch = PortfolioUtil.getWatchSummaryFromWatches(this.props.watches,this.props.trends);
        summaryWatch = Object.values(summaryWatch);
        if(summaryWatch.length === 0){
            summaryWatch = [];
        }
        
        return (
            <>
                <div className='show-container'>
                    <section className='show-graph'>
                        <div className='stock-graph'>
                            <ChartContainer stock={fakeStock} currentPrice={currentPortfolioValue+cash} portfolioTrends={this.props.portfolio} type="portfolio" />
                        </div>
                        <div className='news-list'>
                            <TopArticlesContainer />
                        </div>
                    </section>

                    <section className="show-form scrollable">
                        <div className='trade-form-header portfolio-header'>
                            <h1 className='portfolio-h1'>Stocks</h1>
                        </div>
      
                        <div className="portfolio-stocks">
                            {
                                this.props.summaryStock.length === 0 &&
                                <div className='no-stocks'> no stocks yet </div>
                            }

                            {
                                this.props.summaryStock.map( stock => (
                                    <SummaryStockItem key={stock.ticker_name} stock={stock} stockTrends={this.props.trends}/> 
                                ))
                            }
                        </div>

                        <div className='trade-form-header portfolio-header'>
                            <h1 className='portfolio-h1'>Watchlist</h1>
                        </div>

                        <div className="portfolio-stocks">
                            {
                                summaryWatch.map(stock => (
                                    <SummaryStockItem key={stock.ticker_name} stock={stock} stockTrends={this.props.trends} />
                                ))
                            }
                        </div>
                
                    </section>

                </div>
            </>
        )
    }

}

export default Portfolio;