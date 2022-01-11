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
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
          },
        },
        fill: {
          //blue
          colors: ["#004B7F"],
        },
        labels: ["New Tickets Today"],
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
            height={450}
          />
        </div>
      </div>
    );
  }
}
export default RadialGraph;
