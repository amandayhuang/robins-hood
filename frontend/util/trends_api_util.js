import {fetchStock} from './stock_api_util'

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

        $.ajax({
          url: `/api/externals`,
          method: "GET",
          async: false,
          data: {displayName, startDate:key}
        }).then((data) => {
        //   console.log(`${displayName} : ${key} : ${data.totalResults}`);
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

    return $.ajax({
      url: `/api/externals`,
      method: "GET",
      async: false,
      data: { displayName },
    });
}


export const getTopArticles = () => {

  return $.ajax({
    url: `/api/externals`,
    method: "GET",
    async: false
  });
};
