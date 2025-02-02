import React, { useRef, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts1 = () => {
  const chartRefs = [useRef(null), useRef(null), useRef(null)];

  const commonConfig = {
    chart: {
      type: "bar",
      height: 200,
    },
    title: {
      text: null, 
    },
    xAxis: {
      categories: ["A", "B", "C"], 
      tickLength: 0, 
    },
    yAxis: {
      gridLineWidth: 0, 
      tickLength: 10, 
      tickPositioner: function () {
        return [0, 1, 2, 3]; 
      },
      labels: {
        enabled: false, 
      },
      title: {
        text: null,
      },
    },
    series: [
      {
        data: [1, 3, 2], // Example data
        showInLegend: false,
      },
    ],
  };

  const chartConfigs = [
    {
      ...commonConfig,
      title: { text: "Chart 1" },
    },
    {
      ...commonConfig,
      title: { text: "Chart 2" },
    },
    {
      ...commonConfig,
      title: { text: "Chart 3" },
      yAxis: {
        ...commonConfig.yAxis,
        labels: { enabled: true }, // Enable Y-axis labels for the last chart
        title: {
          text: "Y-Axis Label", // Add Y-axis title for the last chart
          align: "high",
          rotation: 0,
          offset: -30,
          y: -20,
        },
      },
    },
  ];

  useEffect(() => {
    // Draw vertical connecting line after all charts are rendered
    const firstChart = chartRefs[0]?.current?.chart;
    const secondChart = chartRefs[1]?.current?.chart;
    const thirdChart = chartRefs[2]?.current?.chart;

    if (firstChart && secondChart && thirdChart) {
      const left = firstChart.yAxis[0].left - 10; // Position the line just before Y-axis
      const top = firstChart.plotTop;
      const bottom = thirdChart.plotTop + thirdChart.plotHeight;

      firstChart.renderer
        .path(["M", left, top, "L", left, bottom]) // Draw the vertical line
        .attr({
          stroke: "#000",
          "stroke-width": 1,
        })
        .add();
    }
  }, [chartRefs]);

  return (
    <div>
      {chartConfigs.map((config, index) => (
        <div key={index} style={{ height: "200px" }}>
          <HighchartsReact
            highcharts={Highcharts}
            options={config}
            ref={chartRefs[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default Charts1;
