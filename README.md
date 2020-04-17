![logo](https://github.com/amandayhuang/robins-hood/blob/master/app/assets/images/logo.png )


A clone of [Robinhood](https://robinhood.com/) that lets you invest in public figures. Share price is determined by the number of news articles a figure is mentioned in on a particular day (powered by News API).

Visit the live site [here](https://robins-hood.herokuapp.com/).

### Noted Features

#### Portfolio
Graphs a user's portfolio value over time based on daily share price.

![portflio](https://github.com/amandayhuang/robins-hood/blob/master/app/assets/images/portfolio.png)

Below is a helper function that gives a summary of a user's owned stocks (`quantity_bought`,`quantity_sold`,`total_paid`,`total_sold_for`,`current_share_price`) as of a given `endDate` parameter.
```javascript
// returns an object with ticker_name keys pointing to an object summarizing shares bought and sold 
// and current value per share as of endDate
export const getStockSummaryFromTrades = (trades, trends, endDate) =>{
    let summaryStock = {};
    for (let i = 0; i < Object.values(trades).length; i++) {
        const trade = Object.values(trades)[i];
        const tradeDate = new Date(trade.created_at);
        if (tradeDate < endDate){
            if (summaryStock[trade.ticker_name] === undefined) {
                let trendsArray = Object.values(trends[trade.ticker_name]);
                let currentSharePrice = 0;
                for (let i = 0; i < trendsArray.length; i++) {
                    const element = trendsArray[i];
                    if (element.name === endDate.toISOString().split('T')[0]){
                        currentSharePrice = element.$;
                    }
                }
                summaryStock[trade.ticker_name] = { ticker_name: trade.ticker_name
                    , quantity_bought: trade.quantity
                    , quantity_sold: 0
                    , total_paid: trade.quantity * trade.share_price
                    , total_sold_for: 0
                    , current_share_price: currentSharePrice};
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
```

#### Buy/Sell Shares
Allows a user to buy or sell shares of public figures.

![trade](https://github.com/amandayhuang/robins-hood/blob/master/app/assets/images/trade.png )

### Technologies
* Ruby on Rails
* Postgres
* JavaScript
* React / Redux
* HTML / CSS
* [NewsAPI](https://newsapi.org/)
* [Recharts](https://recharts.org/)
* [Font Awesome](https://fontawesome.com/)




