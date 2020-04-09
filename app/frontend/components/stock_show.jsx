import React from 'react';
import Chart from './chart';

class StockShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchStock(this.props.match.params.stockId);
        this.props.fetchTrends('Joe Exotic');
    }

    render(){
        // debugger
        return(
            <div className='show-container'>
                <section className='show-graph'>
                    <h1>{this.props.stock.display_name}</h1>
                    <h3>$101.20</h3>
                <div className='stock-graph'>
                    <Chart />
                </div>
                </section>

                <section className="show-form">

                </section>

            </div>
        )
    }

}

export default StockShow;