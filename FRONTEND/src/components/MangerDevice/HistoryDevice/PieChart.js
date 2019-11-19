import React, {Component} from'react';
import Pie from 'react-chartjs-2';



const PieData = {
	labels: [
		'Phòng ngủ',
		'Phòng khách',
		'Phòng bếp'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
export default class PieChart extends Component{
    render(){
        return(
            <div>
                <Pie ref='chart' data={PieData}/>
            </div>
        );
    }
    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
      }
}