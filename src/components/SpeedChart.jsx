import { VStack, Text } from "@chakra-ui/react";
import Speed from "./Speed";

const SpeedChart = () => {
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
          Speed
        </Text>
        <Speed value={40} max={100} />
      </VStack>
    </>
  );
};

export default SpeedChart;
