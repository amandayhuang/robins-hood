import { connect } from 'react-redux';
import Articles from './articles'

const msp = (state) => {
    let articles = state.entities.top_articles;
    debugger
    if (Object.values(articles).length === 0) {
        return {
            articles: [{ title: "", urlToImage: "", source: { name: "" }, publishedAt: "", description: "", url: "" }]
        }
    }
    else {
        return {
            articles: articles
        }
    }

};


export default connect(msp, null)(Articles);