import { Chart, registerables } from "chart.js";
import { Stack, Text, HStack, Tag } from "@chakra-ui/react";
import BatteryPercentage from "./BatteryPercentage";

Chart.register(...registerables);

const ChargingStatus = () => {
  const batteryPercentage = 50;

  return (
    <>
      <Stack
        bg="#3b3b3b"
        px={8}
        py={5}
        borderRadius={10}
        justify="start"
        align="start"
        w="full"
        flex={1}
      >
        <HStack justify="space-between" spacing={5} w="full">
          <Text color="#c7c7c7" fontSize={20} fontWeight={700}>
            Charging
          </Text>
          <Tag color="#c7c7c7" fontWeight="bold" fontSize={16} bg="#171717">
            {batteryPercentage}%
          </Tag>
        </HStack>
        <BatteryPercentage batteryPercentage={batteryPercentage} />
      </Stack>
    </>
  );
};

export default ChargingStatus;
