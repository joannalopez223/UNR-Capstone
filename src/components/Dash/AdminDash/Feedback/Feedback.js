/*
  1. This page contains the data and the rendering of the data for the Feedback provided from the User Page "Feedback".
  2. Admin will be able to view a 0 to 10 Satisfaction Scale vs the number of feedback submitted. Also has option to export data into following files via dropdown icon: 
    a. SVG
    b. PNG
    c. CSV
  3. Will need to connect to database to render charts and feedback statistics.
*/

import React, { Component } from "react";
import Chart from "react-apexcharts";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          align: "center",
        },
        xaxis: {
          categories: [
            [0, "Very", "Unsatisfied"],
            1,
            2,
            3,
            4,
            [5, "Neutral"],
            6,
            7,
            8,
            9,
            [10, "Extremely", "Satisfied"],
          ],
          title: {
            text: "Ratings",
            style: {
              fontSize: "12px",
              color: "#FA9A50",
            },
          },
        },

        yaxis: {
          title: {
            text: "Number of Feedback Ratings",
            style: {
              fontSize: "12px",
              color: "#FA9A50",
            },
          },
        },

        fill: {
          colors: ["#FA9A50"],
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "User Feedback for Maintenance Tickets",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "16px",
            color: "#000000",
          },
        },
      },
      series: [
        {
          name: "Count",
          data: [100, 20, 10, 30, 40, 45, 49, 51, 45, 20, 10],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className={styles.feedback}>
          <div className={styles.title}>
            <p>Feedback</p>
          </div>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="450"
            width="100%"
          />
        </div>
      </div>
    );
  }
}

export default Feedback;
