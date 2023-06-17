import { useEffect, useState } from 'react';
import {Box,Text,Spinner,Image} from '@chakra-ui/react';


const Loader = () => {
return (
     <Box height='100vh' 
  backgroundPosition='center' backgroundSize='cover' backgroundImage='/Loader.png'>
 
<Box
      width="100vw"
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding='50px'
    >
      <Spinner boxSize={15} color="orange" position='relative' top='425px' />
    </Box>


  </Box>
)
  
};

export default Loader;