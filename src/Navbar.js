import React from "react";
import { useState } from "react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
// import { ColorModeScript } from '@chakra-ui/react'
import {
  Flex,
  Heading,
  Spacer,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex bgGradient="linear(to-l, #7928CA, #0096FF)">
      <Heading as="h2" p={3} size="lg" noOfLines={1}>
        <Link to="/">ML-Learn</Link>
      </Heading>
      <Spacer />
      <Menu>
        <MenuButton
          bg={colorMode === "light" ? "#F900BF" : "#A31ACB"}
          as={Button}
          rightIcon={<ChevronDownIcon />}
          _hover={{ bg: "#E15FED" }}
          m={2}
        >
          Learn
        </MenuButton>
        <MenuList bgColor="">
          <Link to="/LinearRegression">
            <MenuItem>Refill</MenuItem>
          </Link>
          <Link to="/LogisticClassification">
            <MenuItem>sells</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Button m={2} mr={4} bgColor="#00D7FF">
        <Link to="/Login">Login</Link>
      </Button>
      <IconButton
        m={2}
        mr={4}
        onClick={toggleColorMode}
        _hover={colorMode === "light" ? "#E15FED"  : "#77ACF1" }
        bg={colorMode === "light" ? "#D09CFA" : "#143F6B"}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
    </Flex>
  );
}

export default Navbar;
