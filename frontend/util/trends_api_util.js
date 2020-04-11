import {fetchStock} from './stock_api_util'

// let apiKey = 'ec885fa30bfd47ea9ca9a19c922c974e';
// let apiKey = '8e1ab7dc651446068017d1d23bbe8cf3';
// let apiKey = '60b6e71280f24d15a105e0ca63bc8c63';
let apiKey = '17b33ca218d24ad89ef9715a81e6d4fb';

export const getNews = (stockId) => {
    let displayName = '';
    fetchStock(stockId).then(response => displayName = response.display_name)

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
        const url = 'https://newsapi.org/v2/everything?' +
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
            if (i === dates.length - 1){
                const d = new Date;
                const mult = 1/(d.getUTCHours()/24);
                let rand = Math.round(Math.random() * 5);
                let newNum = data.totalResults * mult + rand;
                if (data.totalResults === 0 || data.totalResults === undefined){
                    newNum = 1 + rand;
                }
                news.push({ name: key, $: newNum});
            }else{
                news.push({name: key, $: data.totalResults});
            }
        });
    } 

    return news;

}

export const getArticles = stockId =>{
    let displayName = '';
    fetchStock(stockId).then(response => displayName = response.display_name);

    const url = 'https://newsapi.org/v2/everything?' +
        `q=${displayName}&` +
        'sortBy=popularity&' +
        `apiKey=${apiKey}`;

    return $.ajax({
        url: url,
        method: "GET",
        async: false
    })
}