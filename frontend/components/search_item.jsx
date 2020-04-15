import React from 'react';
import { Link } from "react-router-dom";

const SearchItem = (props) => {
    // let jsDate = new Date(props.article.publishedAt);
    let stock = props.stock;
    return (
        <li className='search-item'>
            <Link to={`/stocks/${stock.ticker_name}`}><span className='search-ticker'>{stock.ticker_name}</span><span className='search-display'> {stock.display_name}</span></Link>
        </li>
    )
}

export default SearchItem;