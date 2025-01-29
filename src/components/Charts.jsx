import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts = () => {
  const options = {
    chart: {
      type: "bar",
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
    tooltip: {
      backgroundColor: "yellow",
      borderColor: "black",
      borderRadius: 8,
      style: {
        color: "#333",
        fontSize: "12px",
      },
      shared: true, // Shows data for all series at the same point
      crosshairs: true,
      formatter: function () {
        return `<b>${this.series.name}</b> Hello : ${this.y}`;
      }
    },
    legend: {
      layout: "horizontal",      // Horizontal or vertical
      align: "center",           // Align: left, center, right
      verticalAlign: "bottom",   // Top, middle, bottom
      itemStyle: {
        color: "#333",
        fontWeight: "bold",
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{y}%", // Display value with text
          style: {
            color: "black",
            fontSize: "12px",
          },
        },
      },
    },    
    // plotOptions: {
    //   series: {
    //     animation: true, // Disable animations
    //   },
    // },
    // plotOptions: {
    //   series: {
    //     states: {
    //       hover: {
    //         enabled: true,
    //         lineWidth: 4, // Highlighted line width
    //       },
    //     },
    //   },
    // },
    // plotOptions: {
    //   series: {
    //     point: {
    //       events: {
    //         click: function () {
    //           alert(`Clicked on: ${this.category}, Value: ${this.y}`);
    //         },
    //       },
    //     },
    //   },
    
    
  
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Charts;
