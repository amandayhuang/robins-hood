export const getCashFromBalanceChange = balance_changes =>{
    let cash = 0;
    let bcArray = Object.values(balance_changes);

    for (let i = 0; i < bcArray.length; i++) {
        const element = bcArray[i];
        cash += element.amount;
    }

    return cash;
}

export const getStockSummaryFromTrades = (trades, endDate) =>{
    let summaryStock = {};

    for (let i = 0; i < Object.values(trades).length; i++) {
        const trade = Object.values(trades)[i];
        const tradeDate = new Date(trade.created_at);
        if (tradeDate < endDate){
            if (summaryStock[trade.ticker_name] === undefined) {
                summaryStock[trade.ticker_name] = { ticker_name: trade.ticker_name, quantity_bought: trade.quantity, quantity_sold:0, total_paid: trade.quantity * trade.share_price, total_sold_for: 0};
            } else {
                if (trade.trade_type === 'buy') {
                    summaryStock[trade.ticker_name].quantity_bought += trade.quantity;
                    summaryStock[trade.ticker_name].total_paid += (trade.quantity*trade.share_price);
                } else {
                    summaryStock[trade.ticker_name].quantity_sold += trade.quantity;
                    summaryStock[trade.ticker_name].total_sold_for += (trade.quantity*trade.share_price);
                }
            }
        }
    }

    return summaryStock;
}
