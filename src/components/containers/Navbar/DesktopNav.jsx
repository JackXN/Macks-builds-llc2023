"use client"; 
import React, {useEffect,useState} from 'react';
import styles from "./DesktopStyles";

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
import Link from 'next/link'
import * as Scroll from 'react-scroll';
import NavLinks from '../../../constants/index';



const DesktopNav = () => {
  let ScrollLink      = Scroll.Link;
  const [bgColor, setBgColor] = useState(null);
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
              <Link style={{cursor: 'pointer'}} href='/'>Home </Link>
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
            <ScrollLink style={{cursor: 'pointer'}} to="faq" spy={true} smooth={true} offset={50} duration={500}>About us</ScrollLink>
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
            <ScrollLink style={{cursor: 'pointer'}} to="services" spy={true} smooth={true} offset={50} duration={500}>Services</ScrollLink>
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
            <ScrollLink style={{cursor: 'pointer'}} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</ScrollLink>
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
            <ScrollLink style={{cursor: 'pointer'}} to="projects" spy={true} smooth={true} offset={50} duration={500}>Featured Projects</ScrollLink>
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
            <ScrollLink style={{cursor: 'pointer'}} to="faq" spy={true} smooth={true} offset={50} duration={500}>FAQ</ScrollLink>
            </ListItem>
    
          </List>
        </Flex>
      </Box>
    );
  };
  
  export default DesktopNav;
  
