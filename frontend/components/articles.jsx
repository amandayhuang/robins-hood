import React from 'react'
import ArticleItem from './article_item'

class Articles extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <div className='articles-container'>
            <h1 className='news-title'>News</h1>
                <hr /> 
            {
            this.props.articles.map(article => (
                <ArticleItem key={article.url} article={article}/>
            )
            )
            }
            </div>
            </>
        )
    }
}

export default Articles;