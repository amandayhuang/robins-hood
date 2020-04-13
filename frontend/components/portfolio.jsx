import React from 'react'
import SummaryStockItem from './summary_stock_item'
import * as PortfolioUtil from '../util/portfolio_util';

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
        let portfolio = [];

        const keys = Object.keys(this.props.trends);
        if (keys.length > 0){
            const obj = this.props.trends[keys[0]];
            
            for (let i = 0; i < Object.values(obj).length; i++) {
                const element = Object.values(obj).values[i];
                endDate = new Date(element.name);
                debugger
            }
        }


        return (
            <>
                <div className='show-container'>
                    <section className='show-graph'>
                        <h1>Portfolio {currentPortfolioValue}</h1>
                        {/* <h3 className='top-price'>${this.props.currentPrice.toFixed(2)}</h3> */}
                        <div className='stock-graph'>
                            {/* <ChartContainer stock={this.props.stock} currentPrice={this.props.currentPrice} /> */}
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
                                       <SummaryStockItem stock={stock} stockTrends={this.props.trends}/> 
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