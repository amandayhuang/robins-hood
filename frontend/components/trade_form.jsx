import React from 'react'

class TradeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.trade;
        this.state.cost = 0;
        this.state.message = "";
        this.state.is_owned = this.props.currentUser.owned_stock_ids.includes(this.props.stock.ticker_name);
        this.state.is_watched = this.props.currentUser.watched_stock_ids.includes(this.props.stock.ticker_name);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeWatch = this.makeWatch.bind(this);
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

        if (Number(this.state.quantity) > 0 ) {
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
            this.setState({ message: 'Enter a valid number' });
        }
    }

    makeWatch(){
        const newWatch = { ticker_name: this.props.stock.ticker_name, user_id: this.props.currentUser.id };
        this.props.createWatch(newWatch);
        this.setState({ message: 'Watched!' , is_watched:true});
    }


    render(){
  
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
                
                    <button>{this.props.formType} Shares</button>
                    </form>
                    <div className='trade-message'>{this.state.message}</div>

                    <div className = 'watch'>
                        { 
                        this.state.is_owned === false && this.state.is_watched == false &&
                            <button onClick={this.makeWatch}> Add to Watchlist </button>
                        }

                        {
                        this.state.is_owned === false && this.state.is_watched == true &&
                            <button> Remove from Watchlist </button>
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default TradeForm;