import { Divider, HStack, Stack, Tag, Text } from "@chakra-ui/react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

const voltageData = {
  labels: ["Max", "Min"], // X-axis labels
  datasets: [
    {
      label: "Max and Min Values",
      data: [100, 50], // Example data values for max and min
      backgroundColor: ["#3392FF", "#FFBB00"], // Colors for each bar
      borderColor: ["#3392FF", "#FFBB00"],
      borderWidth: 1,
    },
  ],
};

const tempData = {
  labels: ["Max", "Min"], // X-axis labels
  datasets: [
    {
      label: "Max and Min Values",
      data: [100, 50], // Example data values for max and min
      backgroundColor: ["#3392FF", "#FFBB00"], // Colors for each bar
      borderColor: ["#3392FF", "#FFBB00"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  indexAxis: "y",
  scales: {
    x: {
      ticks: {
        color: "#979797", // Set the font color for the x-axis numbers or text
      },
      grid: {
        color: "#575757", // Change the X-axis grid line color here
      },
      stacked: true,
    },
    y: {
      ticks: {
        color: "#979797", // Set the font color for the x-axis numbers or text
      },
      grid: {
        color: "#575757", // Change the X-axis grid line color here
      },
      stacked: true,
    },
  },
  plugins: {
    legend: {
      display: false, // Hide the legend if you want to
    },
  },
};

const VoltTempDiff = () => (
  <>
    <Stack bg="#3b3b3b" px={8} py={5} borderRadius={10} w="full">
      <HStack justify="space-between">
        <Text color="#c7c7c7" fontSize={20} fontWeight={700}>
          Voltage Range
        </Text>
        <Tag color="#c7c7c7" fontWeight="bold" fontSize={16} bg="#171717">
          40V
        </Tag>
      </HStack>
      <Bar data={voltageData} options={options} />
      <HStack justify="space-between" mt={10}>
        <Text color="#c7c7c7" fontSize={20} fontWeight={700}>
          Temperature Range
        </Text>
        <Tag color="#c7c7c7" fontWeight="bold" fontSize={16} bg="#171717">
          40°C
        </Tag>
      </HStack>
      <Bar data={tempData} options={options} />
    </Stack>
  </>
);

export default VoltTempDiff;
