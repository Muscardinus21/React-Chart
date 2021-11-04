import React from "react";
import { Container } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";

const MOCKDATA = [
  { tickerName: "Tether", ticker: "USDT", leverage: "0", rate: "45" },
  { tickerName: "Cardano", ticker: "ADA", leverage: "0", rate: "12" },
  {
    tickerName: "BitcoinCash",
    ticker: "BCH",
    leverage: "0",
    rate: "15",
  },
  {
    tickerName: "Chainlink",
    ticker: "LINK",
    leverage: "0",
    rate: "15",
  },
  {
    tickerName: "EthereumClassic",
    ticker: "ETC",
    leverage: "0",
    rate: "13",
  },
];

const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
const getRandomColor = () => {
  const c1 = randomNum();
  const c2 = randomNum();
  const c3 = randomNum();
  return `rgb(${c1}, ${c2}, ${c3})`;
};

const PieChart = (): JSX.Element => {
  const data = {
    labels: MOCKDATA.map(({ tickerName }) => tickerName),
    datasets: [
      {
        data: MOCKDATA.map(({ rate }) => rate),
        backgroundColor: new Array(MOCKDATA.length)
          .fill(0)
          .map((el) => getRandomColor()),
      },
    ],
  };

  return (
    <Container style={{ border: "1px solid red" }}>
      <Doughnut
        data={data}
        options={{
          aspectRatio: 2,
          responsive: true,
          plugins: {
            legend: {
              position: "right",
            },
            title: {
              display: true,
              text: "Current Portfolio",
            },
            tooltip: {
              displayColors: true,
              callbacks: {
                title(tooltipItems): string | string[] {
                  return `${tooltipItems[0].label}`;
                },
                label(tooltipItem): string | string[] {
                  return `  ${MOCKDATA[tooltipItem.dataIndex].ticker} ${
                    tooltipItem.raw
                  }%`;
                },
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default PieChart;
