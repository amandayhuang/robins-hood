import React from 'react';
import { Link } from "react-router-dom";

const SummaryStockItem = (props) => {

    debugger
    let share;
    if(props.stock[1] === 1){
        share = 'Share';
    }else{
        share = 'Shares';
    }
    return (
        <Link to={`/stocks/${props.stock[0]}`}>
            <div className="stock-item">
                <section className='stock-item-left'> 
                    <h3>{props.stock[0]}</h3>
                    <h4>{props.stock[1]} {share}</h4>
                </section>
                <section className='stock-item-middle'>

                </section>
                <section className='stock-item-right'>
                {/* <h4> {props.stockTrends[props.stock[0]][0].$}</h4> */}
                </section>
            </div>
        </Link>
    )
}

export default SummaryStockItem;