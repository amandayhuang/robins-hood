import React from 'react';
import { Link } from "react-router-dom";

const SummaryStockItem = (props) => {

    let share;
    let stockTrend = props.stockTrends[props.stock[0]];
    let currentPrice;
    let lastPrice;
    let change;
    let textClass;
    let pre;

    if (stockTrend === undefined){
        currentPrice = 0;
        lastPrice = 0;
        change = 1;
    }else{
        currentPrice = stockTrend[stockTrend.length-1].$;
        lastPrice = stockTrend[stockTrend.length - 2].$;
        change = currentPrice/lastPrice - 1
    }
    if(props.stock[1] === 1){
        share = 'Share';
    }else{
        share = 'Shares';
    }

    if(lastPrice === 0){
        change = 1;
    }

    
    if(change >=0 ){
        textClass='green-text';
        pre='+';
    }else{
        textClass='red-text';
        pre='';
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
                    <h4> ${Number(currentPrice).toFixed(2)}</h4>
                    <h4 class={textClass}> {pre}{Number(change*100).toFixed(2)}%</h4>
                </section>
            </div>
        </Link>
    )
}

export default SummaryStockItem;