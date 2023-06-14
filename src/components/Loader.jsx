import { useEffect, useState } from 'react';
import {Box,Text,Spinner} from '@chakra-ui/react';


const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Box height='100vh' 
  backgroundPosition='center' backgroundSize='cover' backgroundImage='/Loader.png'
  >
<Box
      width="100vw"
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    
    >
      <Spinner size="xl" color="orange" position='relative' top='425px' />
    </Box>


  </Box> : null;
};

export default Loader;