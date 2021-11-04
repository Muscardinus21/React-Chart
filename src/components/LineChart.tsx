import React from "react";
import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";

const MOCKDATA = [
  { rate: 0, date: "2021-10-20T00:00:00Z", asset: "0.00000000" },
  { rate: 2, date: "2021-10-21T00:00:00Z", asset: "0.00000000" },
  { rate: -5, date: "2021-10-22T00:00:00Z", asset: "0.00000000" },
  { rate: 3, date: "2021-10-23T00:00:00Z", asset: "0.00000000" },
  { rate: 0, date: "2021-10-24T00:00:00Z", asset: "0.00000000" },
  { rate: 0, date: "2021-10-25T00:00:00Z", asset: "0.00000000" },
  { rate: 0, date: "2021-10-26T00:00:00Z", asset: "0.00000000" },
  { rate: 5, date: "2021-10-27T00:00:00Z", asset: "0.00000000" },
  { rate: 0, date: "2021-10-28T00:00:00Z", asset: "0.00000000" },
  { rate: 10, date: "2021-10-29T00:00:00Z", asset: "0.00000000" },
  { rate: -10, date: "2021-10-30T00:00:00Z", asset: "0.00000000" },
  { rate: 0, date: "2021-10-31T00:00:00Z", asset: "0.00000000" },
  { rate: 30, date: "2021-11-01T00:00:00Z", asset: "0.00000000" },
  { rate: 20, date: "2021-11-02T00:00:00Z", asset: "0.00000000" },
  { rate: 0, date: "2021-11-03T00:00:00Z", asset: "0.00000000" },
];

const LineChart = (): JSX.Element => {
  const data = {
    labels: MOCKDATA.map(({ date }) => format(+new Date(date), "dd MMM yy")),
    datasets: [
      {
        data: MOCKDATA.map(({ rate }) => rate),
        borderColor: "black",
        backgroundColor: "black",
        fill: {
          above: "rgb(99, 190, 30)",
          below: "rgb(234, 100, 100)",
          target: { value: 0 },
        },
      },
    ],
  };

  return (
    <Container style={{ border: "1px solid red" }}>
      <Line
        data={data}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          scales: {
            y: {
              grid: { drawOnChartArea: false },
              position: "right",
            },
            x: {
              grid: {
                drawOnChartArea: false,
              },
            },
          },
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Cumulative Return",
            },
            tooltip: {
              displayColors: false,
              callbacks: {
                label(tooltipItem): string | string[] {
                  return `Cumulative Return ${tooltipItem.raw}%`;
                },
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default LineChart;
