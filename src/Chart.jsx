import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend, ChartDataLabels);

export const options = {
  responsive: true,
  layout: {
    padding: 60,
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 16,
        },
        color: "#46626F",
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        padding: 10,
        font: {
          size: 16,
          family: "mulish",
          weight: "400",
        },
        color: "#46626F",
        callback: function (value, index, values) {
          if (index != 0) {
            return value.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
              maximumFractionDigits: 0,
            });
          }
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: "end",
      align: "top",
      color: "#3D3D3D",
      font: {
        weight: "700",
        size: 16,
        family: "livvic",
      },
      formatter: function (value, context) {
        const datasetArray = [];
        context.chart.data.datasets.forEach((dataset) => {
          if (dataset.data[context.dataIndex] != undefined) {
            datasetArray.push(dataset.data[context.dataIndex]);
          }
        });

        function getSum(total, datapoint) {
          return total + datapoint;
        }

        let sum = datasetArray.reduce(getSum, 0);

        let yearCommission = sum * (context.dataset.commission / 100);

        if (context.datasetIndex === datasetArray.length - 1) {
          return `${yearCommission.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumFractionDigits: 0,
          })}`;
        } else {
          return "";
        }
      },
    },
  },
};

const labels = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

export default function Chart(props) {


  return (
    <Bar
      options={options}
      data={{
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: props["incomeNewCustomers"],
            backgroundColor: "rgb(199, 212, 50)",
            commission: props["commission"],
          },
          {
            label: "Dataset 2",
            data: props["incomeRetainedCustomers"],
            backgroundColor: "rgb(70, 98, 111)",
            commission: props["commission"],
          },
        ],
      }}
    />
  );
}
