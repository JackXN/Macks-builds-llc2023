import React from "react";
import { Box, Image, Text, Flex,Spacer } from "@chakra-ui/react";
import DesktopImage from './DesktopImage';
import DesktopNav from "../Navbar/DesktopNav";

const DesktopHero = () => {
  return (
    <>
    <DesktopNav/>
    <Flex backgroundColor='#242632'>
       
<Box sx={styles.hero}>
<Text as='h1'>Transforming Spaces <br/> & Delivering Quality</Text>
        <Text as='h3'>Your Premier Contracting Solution</Text>




</Box>

<Spacer/>
<Box flex='1'>
   <DesktopImage/>
   </Box>
    </Flex>
    </>
  );
};

const styles ={
    hero: {
        display: 'flex',
        flexDirection:'column',
        // justifyContent: 'center',
       position:'relative',
       left: ['150px'],
       top: ['150px'],
       height:'100vh',
    
        alignItems: 'center',

        h1: {
            color: 'white'
        }
    }
}



export default DesktopHero;