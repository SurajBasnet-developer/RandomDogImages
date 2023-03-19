import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import "./App.css";
import Dogimage from "./components/Dogimage";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Box p="4">
          <Heading mb="4">Cute Dog Images</Heading>
          <Dogimage />
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
