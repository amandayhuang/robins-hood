import React from 'react'
import ArticleItem from './article_item'

class Articles extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <ul>
            {
            this.props.articles.map(article => (
                <ArticleItem article={article}/>
            )
            )
            }
            </ul>
            </>
        )
    }
}

export default Articles;