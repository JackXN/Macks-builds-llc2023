import { useEffect, useState } from 'react';
import {Box,Text,Spinner} from '@chakra-ui/react';


const Loader = () => {

return (
     <Box height='100vh' 
  backgroundPosition='center' backgroundSize='cover' backgroundImage='/Loader.png'
  >
<Box
      width="100vw"
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    
    >
      <Spinner boxSize={20} color="orange" position='relative' top='425px' />
    </Box>


  </Box>
)
  
};

export default Loader;