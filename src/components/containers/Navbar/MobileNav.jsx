"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [bgColor, setBgColor] = useState('/HeroBgTwo.png');
//   const [logoColor, setLogoColor] = useState("./assets/images/Logo.png");
const [bgStyle, setBgStyle] = useState({ backgroundColor: 'orange' });  
let Link = Scroll.Link;

  //! OnScroll Function

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollPos(window.pageYOffset);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const bgColor = scrollPos > 0 ? "rgba(0,0,0,0.5)" : "transparent";
    const bgStyle = bgColor === "transparent" ? { backgroundImage: 'url("/HeroBgTwo.png")' } : { backgroundColor: bgColor };
    setBgStyle(bgStyle);
  }, [scrollPos]);

  return (
    
    <Box
      as="nav"
      alignItems="center"
      justifyContent="center"
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundAttachment='fixed'
    {...bgStyle}
      // wrap="wrap"
      // bg='#242632'
      // padding="1.5rem"
      // bg={bgColor}
      padding="20px"
    //   borderRadius="20px"
      color="white"
      // position="absolute"
      position="sticky"
      transition="background-color 0.5s ease-out"
      top={0}
      right={0}
      left={0}
      zIndex={4}
      display={["flex", "flex", "flex", "flex", "none"]}
    >
      <Box display={{ sm: "block", lg: " none" }} onClick={onOpen}>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Toggle navigation"
          color="white"
          background="none"
          transition="all 0.5s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
          onClick={() => setShow(!show)}
          fontSize="25px"
          mt="20px"
          position="relative"
          bottom={["10px"]}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        position="relative"
        
      >
        {/* <Text as='h1' fontFamily='Bangers' color='black'>ITE <br/> SMITHS</Text> */}
        <Image
            src='./Logo.png'
            transition="src 0.5s ease-in"
            alt="Something"
            height="70%"
            width="70%"
            alignSelf="center"
            position="relative"
            right={["25px"]}
            marginLeft='30px'
          />
      </Box>

      {/* DRAWER */}
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={null}
      >
        <DrawerOverlay />
        <DrawerContent bg="rgba(0,0,0,0.3)">
          <DrawerCloseButton color='white' />
          <DrawerBody
            display="flex"
            flexDirection="column"
            fontSize={"35px"}
            padding={"30px"}
            margin={"30px"}
            color="white"
            fontWeight='bold'
            bg="rgba(0,0,0,0)"
            borderRadius="20px"
            fontFamily="Lato"
          >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              sx={styles.linkTag}
            >
          Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              sx={styles.linkTag}
              
            >
              About Us
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              sx={styles.linkTag}
           
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              sx={styles.linkTag}
            >
              Contact Us
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              sx={styles.linkTag}
            >
              Featured Projects
            </Link>
            <Link
              activeClass="active"
              to="FAQ"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              _hover={{ transform: 'translateY(-8px)', boxShadow: 'xl black', cursor: 'pointer' }}
              sx={styles.linkTag}
            >
              FAQ
            </Link>
      
          </DrawerBody>

        </DrawerContent>

      </Drawer>

      <Flex align="center">
       
      </Flex>
   
    </Box>

  );
};

const styles = {
  linkTag: {
    color: 'orange'
  }
}

export default Navbar;
