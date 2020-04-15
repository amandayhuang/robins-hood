import React from 'react';
import { Link } from "react-router-dom";

const SearchItem = (props) => {
    // let jsDate = new Date(props.article.publishedAt);
    let stock = props.stock;
    return (
        <li className='search-item'>
            <Link to={`/stocks/${stock.ticker_name}`}>{stock.ticker_name} {stock.display_name}</Link>
        </li>
    )
}

export default SearchItem;