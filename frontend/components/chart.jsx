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
    console.log(item);
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
        if (e.activePayload !== undefined && e.activePayload[0].$ !== null) {
            this.setState({ topPrice: e.activePayload[0].payload.$ });
        }
    }

    resetPrice(e){
        this.setState({ topPrice: this.props.currentPrice });
    }



    render() {
        let showPrice;
        if (Number(this.props.currentPrice) !== 0 && this.state.topPrice === -1) {
            showPrice = this.props.currentPrice;
        } else {
            showPrice = this.state.topPrice;
        }
        return (
            <>
            <h3 className='top-price'>${showPrice.toFixed(2)}</h3>
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