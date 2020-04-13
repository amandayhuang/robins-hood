import React from 'react'
import SummaryStockItem from './summary_stock_item'

class Portfolio extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        debugger
        for (let i = 0; i < this.props.currentUser.owned_stock_ids.length; i++) {
            const tickerName = this.props.currentUser.owned_stock_ids[i];
            this.props.fetchStock(tickerName);
        }
    }

    render() {
        // debugger
        return (
            <>
                <div className='show-container'>
                    <section className='show-graph'>
                        <h1>Portfolio</h1>
                        {/* <h3 className='top-price'>${this.props.currentPrice.toFixed(2)}</h3> */}
                        <div className='stock-graph'>
                            {/* <ChartContainer stock={this.props.stock} currentPrice={this.props.currentPrice} /> */}
                        </div>
                        <div className='news-list'>
                            {/* <ArticlesContainer stock={this.props.stock} /> */}
                        </div>
                    </section>

                    <section className="show-form">
                        <div className='trade-form-header'>
                            <h1>Stocks</h1>
                        </div>
      
                           <div className="portfolio-stocks">
                               {
                                   this.props.summaryStock.map( stock => (
                                     <SummaryStockItem stock={stock}/>  
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