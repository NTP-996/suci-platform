import { ChakraProvider, Text } from "@chakra-ui/react";
import Hackathon from "../../components/hackathon/hackathon.component";

const Event = () => {
  return (
    <ChakraProvider>
      <Text>Event Page</Text>
      <Hackathon />
    </ChakraProvider>
  );
};

export default Event;
