import { Text, VStack } from "@chakra-ui/react";

const BrakePressure = () => {
  return (
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
        Break Pressure
      </Text>
    </VStack>
  );
};

export default BrakePressure;
