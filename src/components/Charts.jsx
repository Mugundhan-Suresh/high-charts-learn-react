import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts = () => {
  const options = {
    chart: {
      type: "line",
      backgroundColor: "yellow",
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
    subtitle: {
      text: "Subtitle for customized chart",
    //   verticalAlign: "middle",
      align: "center",
      y: 40,
      style: {
        color: "black",
        fontWeight: "800"
      }
    },
    series: [
      {
        name: "d1",
        data: [1, 6, 3, 4, 5],
      },
      {
        name: "d2",
        data: [6,7,8,9],
      },
      {
        name: "d3",
        data: [1,7,8,4,10],
      },
      
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Charts;
