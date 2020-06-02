import {fetchStock} from './stock_api_util'

const keys = ['060db197a76147cea83f519ea566585c', 'b96d374f6b3245ebb9b1b0b36634a90a', '516400c09b9a46b0abb9df2c7ca570a2', 'c0766a997e124d55a30b49353c094d7d', '34c90171b7c542b78e7f8ff67b2744f1', '8880d365c2d74af3a176aefd874464d9', 'b27cdde4a91144d09e04a27b8ac51cc2','0e797ff5745843f8873c16444b9b3430'];
let randomKey = keys[Math.floor(Math.random() * keys.length)];
const proxyUrl = "https://cors-anywhere.herokuapp.com/"; 
// const proxyUrl = "https://murmuring-mesa-42195.herokuapp.com/";

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
        // const url = 
        //     // `${proxyUrl}` +
        //     'https://newsapi.org/v2/everything?' +
        //     `q=${displayName}&` +
        //     `from=${key}&` +
        //     `to=${key}&` +
        //     'sortBy=publishedAt&' +
        //     `apiKey=${randomKey}`;

        $.ajax({
          url: `/api/externals`,
          method: "GET",
          async: false,
          data: {displayName, startDate:key}
        }).then((data) => {
          console.log(`${displayName} : ${key} : ${data.totalResults}`);
          if (i === dates.length - 1) {
            const d = new Date();
            const mult = 1 / (d.getUTCHours() / 24);
            if (d.getUTCHours === 0) {
              mult = 24;
            }
            let rand = Math.random() * 5;
            let newNum = Math.round(data.totalResults * mult);
            if (newNum === Infinity) {
              newNum = Math.round(data.totalResults * 24);
            }
            if (data.totalResults === 0 || data.totalResults === undefined) {
              newNum = Math.round(1 + rand);
            }
            news.push({ name: key, $: newNum });
          } else {
            news.push({ name: key, $: data.totalResults });
          }
        });
    } 

    return news;

}

export const getArticles = stockId =>{
    let displayName = '';
    fetchStock(stockId).then(response => displayName = response.display_name);

    // const url =
    //   `${proxyUrl}` +
    //   "https://newsapi.org/v2/everything?" +
    //   `q=${displayName}&` +
    //   "sortBy=popularity&" +
    //   `apiKey=${randomKey}`;

    return $.ajax({
      url: `/api/externals`,
      method: "GET",
      async: false,
      data: { displayName },
    });
}

// export const getTopArticles = () => {
//     const url =
//       "https://newsapi.org/v2/top-headlines?" +
//       `country=us&` +
//       "category=entertainment&" +
//       `apiKey=${randomKey}`;

//     return $.ajax({
//         url: url,
//         method: "GET",
//         async: false
//     })
// }

export const getTopArticles = () => {
//   const url =
//     "https://newsapi.org/v2/top-headlines?" +
//     `country=us&` +
//     "category=entertainment&" +
//     `apiKey=${randomKey}`;

  return $.ajax({
    url: `/api/externals`,
    method: "GET",
    async: false,
    // data: {stockId}
  });
};
