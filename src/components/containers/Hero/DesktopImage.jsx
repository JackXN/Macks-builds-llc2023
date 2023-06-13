import React from "react";
import { Box, Image,Text } from "@chakra-ui/react";
import {BsFillTelephoneFill as Phone} from 'react-icons/bs';

const OverlappingImages = () => {
  return (
    <Box position="relative" width="300px"  right={['190px']} display='flex' flexDirection='column' >


        <Box height='90vh' width={['440px']} backgroundPosition='center'backgroundImage='DesktopImageTwo.png' backgroundSize='cover' borderRadius='md' boxShadow='dark-lg'>
       
        </Box>
  
      {/* <Image
        src="/DesktopImageOne.png"
        alt="First Image"
        width="100%"
        zIndex={1}
    
        sx={styles.images}

      /> */}
      <Image
        src="/DesktopImageOne.png"
        alt="Second Image"
        width='auto'
        height="auto"
        sx={styles.images}
        zIndex={2}
        bottom={['125px']}
        right={['120px']}
     
      />
     
    </Box>
  );
};

const styles = {
    images: {
        position: 'relative'
        
    }
}

export default OverlappingImages;