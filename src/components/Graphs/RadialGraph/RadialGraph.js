import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./RadialGraph.module.css";

class RadialGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      options: {
        chart: {
          align: "center",
          type: "radialBar",
        },
        labels: ["New Tickets Today"],

        plotOptions: {
          radialBar: {
            offsetX: 0,
            offsetY: 0,
            hollow: {
              size: "50%",
            },
          },
        },

        fill: {
          //blue
          colors: ["#004B7F"],
        },
        //black
        colors: ["#000000"],
      },
    };
  }

  render() {
    return (
      <div>
        <div className={styles.chart}>
          <div className={styles.title}>
            <p>Statistics</p>
          </div>

          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={350}
          />
        </div>
      </div>
    );
  }
}
export default RadialGraph;
