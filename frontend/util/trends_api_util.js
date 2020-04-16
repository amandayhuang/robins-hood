import {fetchStock} from './stock_api_util'

const keys = ['ec885fa30bfd47ea9ca9a19c922c974e', '8e1ab7dc651446068017d1d23bbe8cf3', '60b6e71280f24d15a105e0ca63bc8c63', '17b33ca218d24ad89ef9715a81e6d4fb', 'be5218bb2a91424fa1755577ede6fde1'];

let randomKey = keys[Math.floor(Math.random() * keys.length)];
// randomKey = '3bcf3c8abafc4786be68bd74e90677a2';
// randomKey = 'bde33e3500614684b270fa5a75c27d2a'; //delete
// randomKey = '098c2851ae1a455faf7c69b1ac2bc7e2';
// randomKey = '7fc2e8cc4e63454e92ed536947860baf';
// randomKey = 'd0f31208935e4270be18bd0d72595166';
// randomKey = '2580bfd7b3054b46aab57eb30790b3a6';

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

export const getArticles = stockId =>{
    let displayName = '';
    fetchStock(stockId).then(response => displayName = response.display_name);

    const url = 'https://newsapi.org/v2/everything?' +
        `q=${displayName}&` +
        'sortBy=popularity&' +
        `apiKey=${randomKey}`;

    return $.ajax({
        url: url,
        method: "GET",
        async: false
    })
}

export const getTopArticles = () => {
    const url = 'https://newsapi.org/v2/top-headlines?' +
        `country=us&` +
        'category=entertainment&' +
        `apiKey=${randomKey}`;

    return $.ajax({
        url: url,
        method: "GET",
        async: false
    })
}