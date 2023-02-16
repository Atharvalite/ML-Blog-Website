import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Video from "./videos/video-2.mp4";

function Hero(){
    return (
      <Box>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <h1>An Introduction to Machine Learning.</h1>
        <p>For Students, by Students.</p>
        <Button ml={650} mt={-300} zIndex={1} size="xs">
          GET STARTED
        </Button>
      </Box>
    );
}

export default Hero;