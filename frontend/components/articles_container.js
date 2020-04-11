import { connect } from 'react-redux';
import Articles from '../components/articles'

const msp = (state, ownProps) =>{
    let articles = state.entities.articles[ownProps.stock.ticker_name];
    if(articles === undefined){
        return {
            articles: [{title:"",urlToImage:"", source:{name:""},publishedAt:"", description:"",url:""}]
        }
    }
    else{
        return {
            articles: articles
        }
    }

};


export default connect(msp,null)(Articles);