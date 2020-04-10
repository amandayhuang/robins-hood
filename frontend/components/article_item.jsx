import React from 'react';

const ArticleItem = (props) =>{
    let jsDate = new Date(props.article.publishedAt);
    return(
    <div className="article-item">
        <div className="article-item-left">
            <h4>{props.article.source.name}</h4> <h4>{jsDate.toDateString()}</h4>
            <h2>{props.article.title}</h2>
        </div>
        <div className="article-item-right">
        <img src={props.article.urlToImage}/>
        </div>
    </div>
    )
}

export default ArticleItem;