import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const BarChart = () => {
    const options = {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Inverted Bullet Chart Example'
        },
        xAxis: {
            categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
        },
        yAxis: {
            title: {
                text: 'Values'
            }
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