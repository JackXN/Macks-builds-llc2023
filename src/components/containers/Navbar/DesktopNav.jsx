"use client"; 
import React, {useEffect,useState} from 'react';
import styles from "./DesktopStyles";
// import Link from 'next/link'
import {
  Box,
  Text,
  Image,
  UnorderedList,
  Flex,
  ListItem,
  List,
  Spacer, Button
} from "@chakra-ui/react";
import * as Scroll from 'react-scroll';

import NavLinks from '../../../constants/index';



const DesktopNav = () => {
  let Link      = Scroll.Link;
  const [bgColor, setBgColor] = useState('orange');
  const [scrollPos, setScrollPos] = useState(0);
const [shadow, setShadow] = useState('md')
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
    if (scrollPos > 200) {
      setBgColor("rgba(0,0,0,0.5)");
      setShadow('none')
    } else {
      setBgColor('#242632');
    }
  }, [scrollPos]);
  





    return (
      <Box sx={styles.container} 
      as="nav"
      position="sticky"
      top={0}
      zIndex={10}
      bg={bgColor}
      boxShadow={shadow}
      >
        <Flex sx={styles.leftContainer}>
          <Image
          src='./Logo.png'
            alt="Site Smiths Logo"
            height={["50%", "50%", "50%", "100%"]}
          />
        </Flex>
        <Spacer />
  
        <Flex sx={styles.rightContainer}>
          <List display="flex">
            <ListItem mr="20px" padding="10px 8px">
              <Link style={{cursor: 'pointer'}} to="test1" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
            <Link style={{cursor: 'pointer'}} to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
              Services
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
              Contact
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
              Gallery
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
              FAQ
            </ListItem>
            <ListItem>
           <Button padding='20px 20px'>Get A Quote Today!</Button>
            </ListItem>
          </List>
        </Flex>
      </Box>
    );
  };
  
  export default DesktopNav;
  
