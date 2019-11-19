import React, {Component} from'react';
import {Line} from 'react-chartjs-2';
const LineData={
    labels:['CN','T2','T3','T4','T5','T6','T7'],
    datasets:[
        {
            label:'Điện năng tiêu thụ ngày',
            fill:false,
            lineTension:0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 70]
        }
    ]
}

export default class LineChart extends Component{
    render(){
        return(
            <div>
                <Line ref='chart' data={LineData}/>
            </div>
        );
    }
    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
      }
}