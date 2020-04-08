import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'March 1',  price: 2400
    },
    {
        name: 'March 2',  price: 1398
    },
    {
        name: 'March 3',  price: 9800
    },
    {
        name: 'March 4',  price: 3908
    },
    {
        name: 'March 5',  price: 4800
    },
    {
        name: 'March 6',  price: 3800
    },
    {
        name: 'March 7',  price: 4300 
    },
];

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
                <Tooltip />
                <Line type="monotone" dot={false} dataKey="price" stroke="#52CF9A" activeDot={{ r: 5 }} />
            </LineChart>
        );
    }
}