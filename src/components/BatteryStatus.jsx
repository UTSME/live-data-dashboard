import { Stack, Text, VStack } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import revenueData from "../data/revenueData.json";

const BatteryStatus = () => {
  const titles = ["Energy", "AWP", "Voltage"];
  const colorSet = ["#FA5431", "#FFBB00", "#3392FF"];
  const options = {
    maintainAspectRatio: true,
    aspectRatio: 2, // Adjust this value as needed
    responsive: true,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#979797", // Set the font color for the x-axis numbers or text
        },
        grid: {
          color: "#575757", // Change the X-axis grid line color here
        },
      },
      y: {
        ticks: {
          color: "#979797", // Set the font color for the y-axis numbers or text
        },
        grid: {
          color: "#575757", // Change the X-axis grid line color here
        },
      },
    },
  };
  return (
    <>
      <Stack
        bg="#3b3b3b"
        px={8}
        py={5}
        borderRadius={10}
        flex={1}
        h="full"
        w="full"
      >
        <VStack spacing={5}>
          {titles.map((index) => {
            return (
              <>
                <Text color="#c7c7c7" fontSize={20} fontWeight={700} w="full">
                  {index}
                </Text>
                <Line
                  key={index}
                  data={{
                    labels: revenueData.map((data) => data.label),
                    datasets: [
                      {
                        data: revenueData.map((data) => data.revenue),
                        backgroundColor: colorSet[titles.indexOf(index)],
                      },
                    ],
                  }}
                  options={{
                    ...options,
                    elements: {
                      line: {
                        backgroundColor: colorSet[titles.indexOf(index)],
                        borderColor: colorSet[titles.indexOf(index)],
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </>
            );
          })}
        </VStack>
      </Stack>
    </>
  );
};

export default BatteryStatus;
