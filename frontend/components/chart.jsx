import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const itemStyle = {
    color: 'black',
    'fontFamily':  'Helvetica Neue',
    'fontSize':'16px'
};

const wrapperStyle = {
    color: 'gray',
    'fontFamily': 'Helvetica Neue',
    'fontSize': '12px'
    
};

const contentStyle = {
    border: 'none',
    padding: '0',
    backgroundColor: 'none'
};

const labelStyle = {
    
};



export default class Chart extends PureComponent {

    constructor(props){
        super(props);
    }

    render() {
        // console.log(this.props.trends);
        return (
            <>
            <LineChart
                width={700}
                height={300}
                data={this.props.trends}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 20,
                }}
            >
                <XAxis dataKey="name" hide={true}/>
                <Tooltip separator='' itemStyle={itemStyle} wrapperStyle={wrapperStyle} contentStyle={contentStyle} labelStyle={labelStyle}/>
                <Line type="monotone"  dot={false} dataKey="$" stroke="#52CF9A" activeDot={{ r: 5 }} />
            </LineChart>
            </>
        );
    }
}