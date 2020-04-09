const googleTrends = require('google-trends-api');

// default to get last 3 years of data
const LOOKBACK_DAYS = 10; //1095
let startTime = new Date;
startTime = startTime.setDate(startTime.getDate() - LOOKBACK_DAYS);
startTime = new Date(startTime);

const getTrends = displayName =>{
    // debugger
    return googleTrends.interestOverTime({ keyword: displayName, startTime: startTime }
        , (err, results) => {
            if (err) {
                console.log('error: ', err);
            }
            else {
                console.log(results);
                return results;
            };
        })
}




export const getNews = displayName =>{
    var url = 'http://newsapi.org/v2/everything?' +
        `q=${displayName}&` +
        `from=${'2020-03-01'}&` +
        'sortBy=popularity&' +
        'apiKey=ec885fa30bfd47ea9ca9a19c922c974e';
    
    console.log(url);

    $.ajax({
        url:url,
        method: "GET",
        error: function () {
            console.log("error!");
        },
        success: function(data) {
            console.log(data);
        }
    });


}
// export default getTrends;
// let response = getTrends('Joe Exotic');

// getNews('Joe Exotic');
// getNews(25);

