import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./DonutGraph.module.css";

class DonutGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [15, 27, 10, 12, 13],
      options: {
        chart: {
          type: "donut",
        },
        labels: [
          "Argenta Hall",
          "Canada Hall",
          "Great Basin Hall",
          "Juniper Hall",
          "NYE Hall",
        ],
        legend: {
          position: "top",
        },
        colors: ["#004B7F", "#FA9A50", "#4DAC6D", "#D12727", "#707070"],
      },
    };
  }

  render() {
    return (
      <div>
        <div className={styles.graph}>
          <div className={styles.title}>
            <p>Building Maintenance Tickets</p>
          </div>

          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height={425}
          />
        </div>
      </div>
    );
  }
}
export default DonutGraph;
