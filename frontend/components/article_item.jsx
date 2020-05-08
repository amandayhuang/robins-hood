import React from 'react';

const ArticleItem = (props) =>{
    let jsDate = new Date(props.article.publishedAt);
    return(
    <a target="_blank"  href={props.article.url}>
    <div className="article-item">
        <div className="article-item-left">
            <h4>{props.article.source.name}</h4> <h4 className="news-date">{jsDate.toDateString()}</h4>
            <h2>{props.article.title}</h2>
            <h4 className="news-date">{props.article.description}</h4>
        </div>
        <div className="article-item-right">
        <img src={props.article.urlToImage}/>
        </div>
    </div>
    </a>
    )
}

export default ArticleItem;