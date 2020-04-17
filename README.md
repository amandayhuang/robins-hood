![logo](https://github.com/amandayhuang/robins-hood/blob/master/app/assets/images/logo.png )


A clone of [Robinhood](https://robinhood.com/) that lets you invest in public figures. Share price is determined by the number of news articles a figure is mentioned in on a particular day (powered by [NewsAPI](https://newsapi.org/)).

Visit the live site [here](https://robins-hood.herokuapp.com/).

## Noted Features

### Portfolio
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

### Buy/Sell Shares
Allows a user to buy or sell shares of public figures.

![trade](https://github.com/amandayhuang/robins-hood/blob/master/app/assets/images/trade.png )

Below function calls News API to get the number of news articles mentioning a search term on a particular day, used to determine what price a user can buy shares at. One challenge was determining the share price close to the beginning of the day. I chose to use the number of articles and hours through the day to extrapolate how many articles there would be in a full day based on current trajectory.
```javascript
export const getNews = (stockId) => {
    let displayName = '';
    fetchStock(stockId).then(response => displayName = response.display_name);

    let dates = [];
    let i = 7; // number of days to lookback
    let news = [];

    while (i >= 0) {
        const startTime = new Date;
        startTime = startTime.setDate(startTime.getDate() - i);
        startTime = new Date(startTime);
        dates.push(startTime.toISOString().split('T')[0]);
        i--;
    }
    
    for (let i = 0; i < dates.length; i++) {
        const key = dates[i];
        const url = 'https://newsapi.org/v2/everything?' +
            `q=${displayName}&` +
            `from=${key}&` +
            `to=${key}&` +
            'sortBy=publishedAt&' +
            `apiKey=${randomKey}`;

        $.ajax({
            url: url,
            method: "GET",
            async: false
        }).then(data => {
            console.log(`${displayName} : ${key} : ${data.totalResults}`);
            if (i === dates.length - 1){
                const d = new Date;
                const mult = 1/(d.getUTCHours()/24);
                if (d.getUTCHours === 0){
                    mult = 24;
                }
                let rand = Math.random() * 5;
                let newNum = Math.round(data.totalResults * mult);
                if(newNum === Infinity){
                    newNum = Math.round(data.totalResults * 24)
                }
                if (data.totalResults === 0 || data.totalResults === undefined){
                    newNum = Math.round(1 + rand);
                }
                news.push({ name: key, $: newNum});
            }else{
                news.push({name: key, $: data.totalResults});
            }
        });
    } 

    return news;

}
```

## Technologies
* Ruby on Rails
* Postgres
* JavaScript
* React / Redux
* HTML / CSS
* [NewsAPI](https://newsapi.org/)
* [Recharts](https://recharts.org/)
* [Font Awesome](https://fontawesome.com/)




