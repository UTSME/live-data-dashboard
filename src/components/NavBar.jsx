import { HStack, Text } from "@chakra-ui/react";

// import { logo } from "../assets/logo.png";
// import { menubar } from "../assets/menubar.png";

const NavBar = () => {
  return (
    <HStack w="full" h="80px" bg="#2b2b2b" px={10} position="fixed">
      {/* <Image src={logo} alt="hello" w="50px" h="50px" /> */}
      <Text
        color="white"
        fontSize={35}
        fontWeight={700}
        sx={{
          color: "#fff",
          textShadow: `
            0 0 5px #fff, 
            0 0 15px #1aa7ec, 
            0 0 30px #1aa7ec
          `,
        }}
      >
        UTS:ME
      </Text>
    </HStack>
  );
};

export default NavBar;
