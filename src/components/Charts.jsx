import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts = () => {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Basic Line Chart",
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
