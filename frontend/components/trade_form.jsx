import React from 'react'
import * as PortfolioUtil from '../util/portfolio_util'

class TradeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.trade;
        this.state.shares = 0;
        this.state.buying_power = 0;
        this.state.cost = 0;
        this.state.message = "";
        this.state.is_owned = this.props.currentUser.owned_stock_ids.includes(this.props.stock.ticker_name);
        this.state.is_watched = this.props.currentUser.watched_stock_ids.includes(this.props.stock.ticker_name);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeWatch = this.makeWatch.bind(this);
        this.removeWatch = this.removeWatch.bind(this);
    }

    update(field) {

        return e => this.setState({ 
            [field]: e.currentTarget.value,
            cost: e.currentTarget.value * this.props.currentPrice
         })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.user_id = this.props.userId;
        this.state.ticker_name = this.props.stock.ticker_name;
        this.state.share_price = this.props.currentPrice;
        let allow_trade = false;

        debugger
        if(this.props.formType === 'Buy' && this.state.buying_power >= Number(this.state.quantity)*this.state.share_price){
            allow_trade = true;
        }

        if (this.props.formType === 'Sell' && this.state.shares >= Number(this.state.quantity)) {
            allow_trade = true;
        }

        if (Number(this.state.quantity) > 0 && allow_trade) {
            this.props.createTrade({
                user_id: this.state.user_id,
                ticker_name: this.state.ticker_name,
                quantity: this.state.quantity,
                share_price: this.state.share_price,
                trade_type: this.state.trade_type
            });
            if (Number(this.state.quantity) === 1) {
                this.setState({ quantity: "", cost: 0, message: `✓ ${this.state.quantity} share ${this.props.verb}` });
            } else {
                this.setState({ quantity: "", cost: 0, message: `✓ ${this.state.quantity} shares ${this.props.verb}` });
            }

            setTimeout(() => this.state.message = '', 2000);
        }
        else{
            if((Number(this.state.quantity) > 0) === false){
                this.setState({ message: '✖ Enter a valid number' });
            }
            else if(this.props.formType === 'Buy'){
                this.setState({ message: '✖ Not Enough Buying Power' });
            }else{
                this.setState({ message: '✖ Not Enough Shares' });
            }
        }
    }

    makeWatch(){
        const newWatch = { ticker_name: this.props.stock.ticker_name, user_id: this.props.currentUser.id };
        this.props.createWatch(newWatch);
        this.setState({is_watched:true});
    }

    removeWatch() {
        let watchId;
        for (let i = 0; i < Object.values(this.props.watches).length; i++) {
            const element = Object.values(this.props.watches)[i];
            if(element.ticker_name === this.props.stock.ticker_name){
                watchId = element.id;
            }
        }

        if(watchId > 0){
            this.props.deleteWatch(watchId);
            this.setState({is_watched: false });
        }else{
            this.setState({ message: 'Error!'});
        }
    }


    render(){

        let endDate = new Date;
        let cash = PortfolioUtil.getCashFromBalanceChange(this.props.balance_changes, endDate);
        let stockSummary = PortfolioUtil.getStockSummaryFromTrades(this.props.trades, this.props.trends, new Date);
        let numOwned;
        let desc = this.props.desc;
        if (stockSummary[this.props.stock.ticker_name] === undefined){
            numOwned = 0;
        }else{
            numOwned = stockSummary[this.props.stock.ticker_name].quantity_bought - stockSummary[this.props.stock.ticker_name].quantity_sold;
        }

        this.state.shares = numOwned;
        this.state.buying_power = cash;

        let available;
        if(this.props.formType == 'Buy'){
            available = `$${cash.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
        }else{
            available = numOwned;
            if(available === 1){
                desc = 'Share';
            }
        }


        return(
            <>
                <div className='trade-form'>

                    <form onSubmit={this.handleSubmit}>
                    <div className="shares">
                    <label>Shares </label>
                        <input type="text" value={this.state.quantity} placeholder='0' onChange={this.update("quantity")} />
                    </div>

                    <div className="market-price">
                        <label>Market Price </label>
                            <h4>${this.props.currentPrice.toFixed(2)}</h4>
                    </div>
                    <div className="cost">
                        <label>Estimated {this.props.word}</label>
                        <h4>${this.state.cost.toFixed(2)}</h4>
                    </div>

                    <div className='trade-message' ref="message">{this.state.message}</div>
                
                    <button>{this.props.formType} Shares</button>
                    
                    </form>
                    <div className='trade-message available'>{available} {desc} Available</div>
                    

                    <div className = 'watch'>
                        { 
                        this.state.is_owned === false && this.state.is_watched === false &&
                            <button className='watch-button' onClick={this.makeWatch}> Add to Watchlist </button>
                        }

                        {
                        this.state.is_owned === false && this.state.is_watched === true &&
                            <button className='watch-button' onClick={this.removeWatch}> Remove from Watchlist </button>
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default TradeForm;