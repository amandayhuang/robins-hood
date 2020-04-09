import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'March 1',  $: 240
    },
    {
        name: 'March 2', $: 139
    },
    {
        name: 'March 3', $: 980
    },
    {
        name: 'March 4', $: 390
    },
    {
        name: 'March 5', $: 480
    },
    {
        name: 'March 6', $: 380
    },
    {
        name: 'March 7', $: 430
    },
];

const itemStyle = {
    color: 'gray',
    'fontFamily':  'Helvetica Neue',
    'fontSize':'12px'
};

const wrapperStyle = {
    color: 'green'
};

const contentStyle = {
    border: 'none',
    padding: '0',
    backgroundColor: 'none'
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
                <Tooltip separator='' itemStyle={itemStyle} wrapperStyle={wrapperStyle} contentStyle={contentStyle} labelStyle={labelStyle}/>
                <Line type="monotone"  dot={false} dataKey="$" stroke="#52CF9A" activeDot={{ r: 5 }} />
            </LineChart>
        );
    }
}