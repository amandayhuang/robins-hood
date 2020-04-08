import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'March 1',  $: 2400
    },
    {
        name: 'March 2', $: 1398
    },
    {
        name: 'March 3', $: 9800
    },
    {
        name: 'March 4', $: 3908
    },
    {
        name: 'March 5', $: 4800
    },
    {
        name: 'March 6', $: 3800
    },
    {
        name: 'March 7', $: 4300 
    },
];

const itemStyle = {
    color: 'gray',
    'font-family':  'Helvetica Neue',
    'font-size':'12px'
};

const wrapperStyle = {
    color: 'green'
};

const contentStyle = {
    border: 'none'
};

const labelStyle = {
    display: 'none'
};



export default class Chart extends PureComponent {

    render() {
        return (
            <LineChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 20,
                }}
            >
                <Tooltip offset='40' separator='' itemStyle={itemStyle} wrapperStyle={wrapperStyle} contentStyle={contentStyle} labelStyle={labelStyle}/>
                <Line type="monotone"  dot={false} dataKey="$" stroke="#52CF9A" activeDot={{ r: 5 }} />
            </LineChart>
        );
    }
}