import React from 'react'

class TradeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.trade;
        this.state.cost = 0;
        this.state.message = "";
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.state.stock_id = this.props.stockId;
        this.state.share_price = this.props.currentPrice;
        // debugger
        this.props.createTrade(this.state);
        this.setState({ quantity: 0, cost: 0, message:"✓ Transaction successful"});
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
                </div>
            </>
        )
    }
}

export default TradeForm;