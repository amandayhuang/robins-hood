// const googleTrends = require('google-trends-api');

// // limited to last 30 days by free newsapi account
// const LOOKBACK_DAYS = 30; //1095
// let startTime = new Date;
// startTime = startTime.setDate(startTime.getDate() - LOOKBACK_DAYS);
// startTime = new Date(startTime);

// const getTrends = displayName =>{
//     // debugger
//     return googleTrends.interestOverTime({ keyword: displayName, startTime: startTime }
//         , (err, results) => {
//             if (err) {
//                 console.log('error: ', err);
//             }
//             else {
//                 console.log(results);
//                 return results;
//             };
//         })
// }

const getNews = displayName =>{
    let dates = []
    let i = 7;
    let news = {};

    while (i >= 0) {
        const startTime = new Date;
        startTime = startTime.setDate(startTime.getDate() - i);
        startTime = new Date(startTime);
        dates.push(startTime.toISOString().split('T')[0]);
        i--;
    }
    
    // for (let i = 0; i < dates.length; i++) {
    //     const key = dates[i];
    //     const url = 'http://newsapi.org/v2/everything?' +
    //         `q=${displayName}&` +
    //         `from=${key}&` +
    //         `to=${key}&` +
    //         'sortBy=popularity&' +
    //         'apiKey=ec885fa30bfd47ea9ca9a19c922c974e';

    //     // console.log(url);

    //     $.ajax({
    //         url: url,
    //         method: "GET",
    //         error: function () {
    //             console.log("error!");
    //             news[key] = 0;
    //             return "error";
    //         },
    //         success: function (data) {
    //             news[key] = data.totalResults;
    //         }
    //     });
    // }
    debugger
    // return news;
    return {testing:123};
}


// export default getTrends;
// let response = getTrends('Joe Exotic');

// getNews('Joe Exotic');
// getNews(25);

export default getNews;