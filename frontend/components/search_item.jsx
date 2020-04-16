import React from 'react';
import { Link } from "react-router-dom";
// import { render } from 'react-dom';

class SearchItem extends React.Component {
    constructor(props){
        super(props);
        this.itemRef = React.createRef();
    }
    
    render(){
        let stock = this.props.stock;
        return (
            <Link to={`/stocks/${stock.ticker_name}`} ref={this.itemRef} tabIndex="0" >
            <li className='search-item'>
            <span className='search-ticker'>{stock.ticker_name}</span><span className='search-display'> {stock.display_name}</span>
            </li>
            </Link>
        )
    }
}

export default SearchItem;