import TireTemp from "./TireTemp";
import { VStack } from "@chakra-ui/react";

const Thermometer = () => {
  return (
    <>
      <VStack
        align="start"
        h="full"
        flex={1}
        justify="space-between"
        bg="#3b3b3b"
      >
        <TireTemp value={40} max={100} />
      </VStack>
    </>
  );
};

export default Thermometer;
