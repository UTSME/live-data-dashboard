import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Text, VStack } from "@chakra-ui/react";

Chart.register(...registerables);

// eslint-disable-next-line react/prop-types
const TireTemp = ({ temperature, maxTemperature }) => {
  const data = {
    labels: ["Temperature"],
    datasets: [
      {
        label: "Current Temperature",
        data: [temperature],
        backgroundColor: "red",
        barPercentage: 0.5,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      // If you need a filled background to show the full scale of the thermometer
      {
        label: "Max Temperature",
        data: [maxTemperature],
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        barPercentage: 0.5,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        display: false, // Hide the x-axis labels and gridlines
        stacked: true,
      },
      y: {
        display: false, // Hide the y-axis labels and gridlines
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <>
      <VStack
        align="start"
        borderRadius={10}
        flex={1}
        justify="space-between"
        bg="#3b3b3b"
        px={8}
        py={5}
      >
        <Text color="#c7c7c7" fontSize={20} fontWeight={700}>
          Tire Temperature
        </Text>
      </VStack>
    </>
  );
};

export default TireTemp;
