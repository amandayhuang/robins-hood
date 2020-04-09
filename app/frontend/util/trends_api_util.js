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

export default getTrends;
// let response = getTrends('Joe Exotic');
