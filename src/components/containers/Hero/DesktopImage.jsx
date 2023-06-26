import React from "react";
import { Box, Image } from "@chakra-ui/react";

const OverlappingImages = () => {
  return (
    <Box position="relative" width="300px"  right={['190px']} display='flex' flexDirection='column' >

{/* IMAGE ONE */}
        <Box height='80vh' width={['440px']} backgroundPosition='center'backgroundImage='DesktopImageTwo.png' backgroundSize='cover' borderRadius='md' boxShadow='dark-lg'>
       
        </Box>
  
   
      {/* IMAGE TWO */}
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