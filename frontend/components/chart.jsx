import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const itemStyle = {
    color: 'black',
    'fontFamily':  'Helvetica Neue',
    'fontSize':'16px',
    'fontWeight':"500",
    'display' : 'none'
};

const wrapperStyle = {
    color: 'gray',
    'fontFamily': 'Helvetica Neue',
    'fontSize': '14px'
    
};

const contentStyle = {
    border: 'none',
    padding: '0',
    backgroundColor: 'none'
};

const labelStyle = {

};

function formatLabel(item) {
    // console.log(item);
    let d = new Date(item);
    d.setDate(d.getDate() + 1);
    let arr = d.toDateString().split(" ");
    return `${arr[1]} ${arr[2]}`;
}



export default class Chart extends PureComponent {

    constructor(props){
        super(props);
        this.updatePrice = this.updatePrice.bind(this);
        this.resetPrice = this.resetPrice.bind(this);
        // this.formatXAxis = this.formatXAxis.bind(this);
        this.state = {topPrice: -1};
        
    }

    updatePrice(e){
        if (e.activePayload !== undefined) {
            this.setState({ topPrice: e.activePayload[0].payload.$ });
        }
    }

    resetPrice(e){
        this.setState({ topPrice: this.props.currentPrice });
    }



    render() {
        // debugger
        let showPrice;
        let todayPrice = this.props.trends[this.props.trends.length - 1].$;
        let yesterdayPrice = this.props.trends[this.props.trends.length - 2].$;
        let deltaPer = (todayPrice/yesterdayPrice - 1)*100;
        if(yesterdayPrice === 0){
            deltaPer = 100;
        }
        let delta = todayPrice - yesterdayPrice;

        if (Number(this.props.currentPrice) !== 0 && this.state.topPrice === -1) {
            showPrice = this.props.currentPrice;
        } else {
            showPrice = this.state.topPrice;
            
        }
        
        let sign;
        if(delta >= 0){
            sign = '+';
        }else{
            sign = '-';
        }

        return (
            <>
                <h3 className='top-price bold'>${showPrice.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h3>
            <h5 className='chart-delta'> {sign}${parseFloat(Math.abs(delta)).toFixed(2)} ({sign}{parseFloat(Math.abs(deltaPer)).toFixed(2)}%)<span className='gray-text'> vs yesterday</span></h5>
            <LineChart
                width={700}
                height={300}
                data={this.props.trends}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 20,
                }}
                onMouseMove={this.updatePrice}
                onMouseOut={this.resetPrice}
            >
                <XAxis dataKey="name" hide={false} tick={false} />
                    <Tooltip separator='' itemStyle={itemStyle} labelFormatter={formatLabel} wrapperStyle={wrapperStyle} contentStyle={contentStyle} labelStyle={labelStyle}/>
                <Line type="monotone"  dot={false} dataKey="$" stroke="#52CF9A" activeDot={{ r: 5 }} />
            </LineChart>
            </>
        );
    }
}