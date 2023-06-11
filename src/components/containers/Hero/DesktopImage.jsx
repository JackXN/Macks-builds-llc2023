import React from "react";
import { Box, Image } from "@chakra-ui/react";

const OverlappingImages = () => {
  return (
    <Box position="relative" width="300px" top={['190px']} right={['190px']} >


        <Box height='300px' width='700px' backgroundImage='DesktopImageTwo.png' backgroundSize='cover' >

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
        width='900px'
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