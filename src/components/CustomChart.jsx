import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import AnnotationsModule from "highcharts/modules/annotations";
import bullet from "highcharts/modules/bullet"

// Properly initialize the annotations module
if (typeof AnnotationsModule === "function") {
  AnnotationsModule(Highcharts);
}

const CustomCharts = () => {
  const options = {
    chart: {
      type: "bar",
      height: 600,
      spacingBottom: 20,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Combined Chart with Subtopics",
      align: "center",
    },
    xAxis: {
      categories: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
        "", // Spacer
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
        "", // Spacer
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
      ],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: null,
      },
    },
    tooltip: {
      shared: true,
      backgroundColor: "yellow",
      borderColor: "black",
      borderRadius: 8,
      style: {
        color: "#333",
        fontSize: "12px",
      },
      formatter: function () {
        return `<b>${this.series.name}</b>: ${this.y}`;
      },
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{y}%",
          style: {
            color: "black",
            fontSize: "12px",
          },
        },
      },
    },
    series: [
      {
        name: "d1",
        data: [1, 2, 3, 4, 5, null, 1, 2, 3, 4, 5, null, 1, 2, 3, 4, 5],
      },
      {
        name: "d2",
        data: [6, 7, 8, 9, 11, null, 6, 7, 8, 9, 11, null, 6, 7, 8, 9, 11],
      },
      {
        name: "d3",
        data: [{ y: 0, target: 7 },{ y: 0, target: 16 },{
           y: 0, target: 16 },
           { y: 0, target: 16 },
           { y: 0, target: 16 },
           { y: 0, target: 16 },
           { y: 0, target: 16 },
           { y: 0, target: 16 },
           { y: 0, target: 16 },
           { y: 0, target: 16 },
           { y: 0, target: 16 },
           { y: 0, target: 16 },
          ],
        type: "bullet",
        inverted: true
      },
    ],
    annotations: [
      {
        labels: [
          {
            point: { x: 0, y: 0, xAxis: 0, yAxis: 0 }, // Specify axes
            text: "Subtopic 1",
            style: {
              color: "blue",
              fontWeight: "bold",
              fontSize: "14px",
              fill: "none"
            },
          },
          {
            point: { x: 6, y: 0, xAxis: 0, yAxis: 0 },
            text: "Subtopic 2",
            style: {
              color: "blue",
              fontWeight: "bold",
              fontSize: "14px",
              backGround: "none",
              fill: "none"
            },
          },
          {
            point: { x: 12, y: 0, xAxis: 0, yAxis: 0 },
            text: "Subtopic 3",
            style: {
              color: "blue",
              fontWeight: "bold",
              fontSize: "14px",
            },
          },
        ],
        labelOptions: {
          backgroundColor: "white",
          borderColor: null
        }
      },
    ],
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h6>Subtopic 1</h6>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CustomCharts;
