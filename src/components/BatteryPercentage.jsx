import { Box } from "@chakra-ui/react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

const getBatteryColor = (percentage) => {
  if (percentage < 20) return "#FA5431";
  if (percentage < 60) return "#FFBB00";
  return "#76D147";
};

// eslint-disable-next-line react/prop-types
const BatteryPercentage = ({ batteryPercentage }) => {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Battery",
        data: [batteryPercentage],
        backgroundColor: getBatteryColor(batteryPercentage),
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        max: 100,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    events: [],
  };

  return (
    <Box w="full" h="50px" bg="#171717" px={2} borderRadius="md" mt={2}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BatteryPercentage;
