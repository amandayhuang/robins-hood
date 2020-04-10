import {fetchStock} from './stock_api_util'

const getNews = (stockId) => {

    let displayName = 'testing';
    fetchStock(stockId).then(response => displayName = response.display_name)

    // debugger
    let apiKey = 'ec885fa30bfd47ea9ca9a19c922c974e';
    // let apiKey = '8e1ab7dc651446068017d1d23bbe8cf3';
    
    let dates = [];
    let i = 7;
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
        const url = 'http://newsapi.org/v2/everything?' +
            `q=${displayName}&` +
            `from=${key}&` +
            `to=${key}&` +
            'sortBy=publishedAt&' +
            `apiKey=${apiKey}`;

        $.ajax({
            url: url,
            method: "GET",
            async: false
        }).then(data => {
            console.log(`${displayName} : ${key} : ${data.totalResults}`);
            news.push({name: key, $: data.totalResults});
        });
    } 

    return news;

}

export default getNews;