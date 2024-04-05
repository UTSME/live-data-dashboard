import "./App.css";
import { HStack, VStack, SimpleGrid } from "@chakra-ui/react";

// import NavBar from "./components/NavBar";
import VoltTempDiff from "./components/VoltTempDiff";
import ChargingStatus from "./components/ChargingStatus";
import BatteryStatus from "./components/BatteryStatus";
import SpeedChart from "./components/SpeedChart";
import GGPlot from "./components/GGPlot";
import TireTemp from "./components/TireTemp";
import Suspension from "./components/Suspension";
import BrakePressure from "./components/BrakePressure";

function App() {
  return (
    <>
      <HStack h="100vh" justify="space-between" p={5} w="full" align="start">
        {/* First column with a specific percentage width */}
        <VStack w="25%" align="start" justify="space-between">
          <VoltTempDiff />
          <ChargingStatus />
        </VStack>

        {/* Second column with a different specific percentage width */}
        <VStack w="30%" align="start" justify="space-between" h="full">
          <BatteryStatus />
        </VStack>

        {/* Third column with a different specific percentage width */}
        <VStack w="45%" align="start" h="full">
          <GGPlot />
          <SimpleGrid columns={2} spacing={2} w="full">
            <SpeedChart value={40} max={100} />
            <TireTemp value={50} max={100} />
            <Suspension value={60} max={100} />
            <BrakePressure value={70} max={100} />
          </SimpleGrid>
        </VStack>
      </HStack>
    </>
  );
}

export default App;
