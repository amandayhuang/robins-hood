import { connect } from 'react-redux';
import Articles from '../components/articles'

const msp = (state, ownProps) =>{
    let articles = state.entities.articles[ownProps.stock.id];
    if(articles === undefined){
        return {
            articles: [{title:"",urlToImage:"", source:{name:""}}]
        }
    }
    else{
        return {
            articles: articles
        }
    }

};


export default connect(msp,null)(Articles);