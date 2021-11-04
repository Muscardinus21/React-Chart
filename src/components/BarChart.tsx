import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import Item from "react-chartjs-2";
import { format } from "date-fns";

const MOCKDATA = [
  { rate: 1, date: "2021-11-02T00:00:00Z" },
  { rate: 3, date: "2021-11-01T00:00:00Z" },
  { rate: -8, date: "2021-10-31T00:00:00Z" },
  { rate: 11, date: "2021-10-30T00:00:00Z" },
  { rate: 2, date: "2021-10-29T00:00:00Z" },
  { rate: 2, date: "2021-10-28T00:00:00Z" },
  { rate: 2, date: "2021-10-27T00:00:00Z" },
  { rate: 0, date: "2021-10-26T00:00:00Z" },
  { rate: -5, date: "2021-10-25T00:00:00Z" },
  { rate: 0, date: "2021-10-24T00:00:00Z" },
];

const getRateMinMaxValue = (data: { rate: number; date: string }[]) => {
  const arr = data.map(({ rate }) => rate);
  let maxValue = 0;
  arr.forEach((val) => {
    if (maxValue < Math.abs(val)) maxValue = Math.abs(val);
  });
  return [maxValue * -1, maxValue];
};

const BarChart = (): JSX.Element => {
  const data = {
    labels: MOCKDATA.map(({ date }) => format(+new Date(date), "dd.MMM")),
    datasets: [
      {
        label: "Performance",
        data: MOCKDATA.map(({ rate }) => rate),
        backgroundColor: MOCKDATA.map(({ rate }) => {
          return rate > 0 ? "rgb(99, 190, 30)" : "rgb(234, 100, 100)";
        }),
        borderColor: MOCKDATA.map(({ rate }) => {
          return rate > 0 ? "rgb(99, 190, 30)" : "rgb(234, 100, 100)";
        }),
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container style={{ border: "1px solid red" }}>
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              position: "right",
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            x: {
              min: getRateMinMaxValue(MOCKDATA)[0],
              max: getRateMinMaxValue(MOCKDATA)[1],
              ticks: {
                callback(value, index, values) {
                  return value === 0 ? "" : null;
                },
              },
              grid: {
                drawBorder: false,
              },
            },
          },
          indexAxis: "y",
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Performance",
            },
            tooltip: {
              displayColors: false,
              callbacks: {
                label(tooltipItem): string | string[] {
                  return `Profit/Loss ${tooltipItem.raw}%`;
                },
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default BarChart;
