import React, { PureComponent } from 'react';
import {
    LineChart, Line
} from 'recharts';

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