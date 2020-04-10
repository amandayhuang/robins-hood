import React from 'react';

const ArticleItem = (props) =>(
    <div className="article-item">
        <div>
            <h4>{props.article.source.name}</h4>
            <h4>{props.article.title}</h4>
        </div>
        <div>
        <img src={props.article.urlToImage}/>
        </div>
    </div>
)

export default ArticleItem;