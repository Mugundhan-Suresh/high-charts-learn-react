import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const BarChart = () => {
    const options = {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Inverted',
            align: "left"
        },
        xAxis: {
            categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
        },
        yAxis: {
            title: {
                text: 'Values'
            }
        },
        legend: {
            align: "right",
            verticalAlign: "top",
            floating: true, // Allow it to float on the chart
            y: 0,
            x: 0
        },
        series: [{
            name: 'd3',
            data: [
                1,5,7,3,5
            ],
            color: 'green'

        },
        {
            name: 'd3',
            data: [
                1,5,7,3,5
            ],
            color: 'red'

        }]
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default BarChart;