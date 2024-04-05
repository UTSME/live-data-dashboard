import { Stack, Text, VStack } from "@chakra-ui/react";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(...registerables);

// eslint-disable-next-line react/prop-types
const Speed = ({ value, max }) => {
  // Assuming max is the maximum value on the speedometer
  const data = {
    datasets: [
      {
        data: [value, max - value],
        backgroundColor: ["#F5A21D", "rgba(255, 255, 255, 0.3)"],
        borderColor: ["transparent", "transparent"],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
        radius: "90%",
        cutout: "70%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    events: [],
  };

  return (
    <Stack position="relative" w="full" h="120px" align="center">
      <Doughnut data={data} options={options} />
      <VStack position="absolute" bottom="10%" spacing={0}>
        <Text color="#fff" fontSize="30" fontWeight="bold">
          {value}
        </Text>
        <Text color="#fff" fontSize="10" fontWeight="500">
          km/h
        </Text>
      </VStack>
    </Stack>
  );
};

export default Speed;
