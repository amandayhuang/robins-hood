import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const itemStyle = {
    color: 'black',
    'fontFamily': 'Helvetica Neue',
    'fontSize': '16px',
    'fontWeight': "500",
    'display': 'none'
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



export default class SparkLine extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <LineChart
                    width={100}
                    height={40}
                    data={this.props.trends}
                    margin={{
                        top: 5, right: 0, left: 20, bottom: 0,
                    }}
                >
                    <Line type="monotone" dot={false} dataKey="$" stroke={this.props.stroke} activeDot={{ r: 5 }} />
                </LineChart>
            </>
        );
    }
}