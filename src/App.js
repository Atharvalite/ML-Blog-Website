import React from "react";
import "./App.css";
import { ChakraProvider, Box, useColorMode } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
import Navbar from "./Navbar";
import Hero from "./HeroSection"


function App() {
  // const { colorMode } = useColorMode();
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Box>
          <Navbar />
          <Routes>
          </Routes>
          <Hero/>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
