import React from "react";
import { Box, Image, Text, Flex,Spacer } from "@chakra-ui/react";
import DesktopImage from './DesktopImage';
import DesktopNav from "../Navbar/DesktopNav";
import Counter from "./Counter";
import Buttons from "./Buttons";
import {BsFillTelephoneFill as Phone} from 'react-icons/bs';
const DesktopHero = () => {
    const gradientColors = ["#242733", "#1D1D27"];
  return (
    <>
    <DesktopNav/>
    <Box display={['none', 'none', 'none', 'flex']} flexDirection='column'  position='relative' >
        {/* <Text as='h2' color='white'>Give Us A Call</Text> */}
    </Box>
    <Flex       background={`linear-gradient(to bottom, ${gradientColors[0]}, ${gradientColors[1]})`} position='relative'    height='100vh' display={["none", "none", "none", "flex", "flex"]}>
       
<Box sx={styles.hero} id='home'>
    <Box sx={styles.heroText}>
<Text as='h1'>Transforming Spaces <br/> & Delivering Quality</Text>
        <Text as='h3'>Your Premier Contracting Solution</Text>
    
            <Text as='p' color='white'>
            we are dedicated to delivering quality solutions that bring your spaces to life. Whether youre looking to renovate your home, revamp your office, or create a stunning outdoor area, we have the expertise and passion to make it happen. Explore our range of services and let us help you transform your space into something extraordinary. Get ready to experience the power of quality craftsmanship and design excellence.
            </Text>
            </Box>
            <Box bottom='20px' position='relative' right={['100px', '100px', '190px']}>
            <Buttons/>
            </Box>
            <Box position='relative' display='flex' bottom= '80px'>
                <Counter/>
            </Box>

          

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
       padding: '30px',
    //    left: ['150px'],
       top: ['100px'],
       height:'100%',
       flex: 2,
    
        alignItems: 'center',

        h1: {
            color: 'white'
        }
    },
    heroText: {

    }
}



export default DesktopHero;