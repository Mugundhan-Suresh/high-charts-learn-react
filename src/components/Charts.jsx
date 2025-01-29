import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts = () => {
  const options = {
    chart: {
      type: "line",
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "black",
      style: {
        fontFamily: "Arial, sans-serif",
      },
    },
    title: {
      text: "Customized Chart",
    //   verticalAlign : "bottom",
      align: "center",
      style: {
        color: "blue"
      }
    },
    series: [
      {
        name: "d1",
        data: [ 1,2,3,4,5],
      },
      {
        name: "d2",
        data: [6,7,8,9,11],
      },
      {
        name: "d3",
        data: [1,7,8,4,10],
      },
      
    ],
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
          style: {
            // color: "blue"
          }
        },
        marker: {
          enabled: true,
          radius: 5,
          symbol: "circle"
        },
        lineWidth: 3, 
      }
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Charts;
