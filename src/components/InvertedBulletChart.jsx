import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import bullet from 'highcharts/modules/bullet';

// Initialize the bullet module
// bullet(Highcharts);

const InvertedBulletChart = () => {
    const options = {
        chart: {
            type: 'bullet',
            inverted: true // Invert the chart
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
                { y: 1, target: 7 },
                { y: 8, target: 10 },
                { y: null, target: 6 },
                { y: 4, target: 8 },
                { y: 10, target: 12 },
                { y: null, target: 5 },
                { y: 1, target: 7 },
                { y: 8, target: 9 },
                { y: 4, target: 10 },
                { y: 10, target: 11 },
                { y: null, target: 6 },
                { y: 1, target: 7 },
                { y: 8, target: 9 },
                { y: 4, target: 10 },
                { y: 10, target: 12 }
            ],
            height: 140
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

export default InvertedBulletChart;