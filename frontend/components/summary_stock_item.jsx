import React from 'react';
import { Link } from "react-router-dom";
import SparkLine from './spark_line'

const SummaryStockItem = (props) => {

    let share;
    let stockTrend = props.stockTrends[props.stock.ticker_name];
    let currentPrice;
    let lastPrice;
    let change;
    let textClass;
    let pre;
    let stroke;

    if (stockTrend === undefined){
        currentPrice = 0;
        lastPrice = 0;
        change = 1;
    }else{
        currentPrice = stockTrend[stockTrend.length-1].$;
        lastPrice = stockTrend[stockTrend.length - 2].$;
        // lastPrice = stockTrend[0].$;
        change = currentPrice/lastPrice - 1
    }
    if (props.stock.quantity_bought - props.stock.quantity_sold === 1){
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
        stroke = "#52CF9A";
    }else{
        textClass='red-text';
        pre='';
        stroke = "#F25431";
    }

    return (
        <Link to={`/stocks/${props.stock.ticker_name}`}>
            <div className="stock-item">
                <section className='stock-item-left'> 
                    <h3>{props.stock.ticker_name}</h3>
                    <h4>{props.stock.quantity_bought - props.stock.quantity_sold} {share}</h4>
                </section>
                <section className='stock-item-middle'>
                    <SparkLine trends={stockTrend} stroke={stroke}/>
                </section>
                <section className='stock-item-right'>
                    <h4> ${Number(currentPrice).toFixed(2)}</h4>
                    <h4 className={textClass}> {pre}{Number(change*100).toFixed(2)}%</h4>
                </section>
            </div>
        </Link>
    )
}

export default SummaryStockItem;