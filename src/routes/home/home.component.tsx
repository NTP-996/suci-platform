import React from "react";
import {
  Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  Grid,
} from "@chakra-ui/react";
// import { Logo } from "../../Logo";
import Hero from "../../components/hero/hero.componenet";

const Home = () => {
  return (
    // <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        {/* <VStack spacing={8}> */}
        {/* <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text> */}
        {/* <Text>Home</Text> */}
        <Hero />
        {/* <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link> */}
        {/* </VStack> */}
      </Grid>
    </Box>
    // <Footer />
    // </ChakraProvider>
  );
};

export default Home;
