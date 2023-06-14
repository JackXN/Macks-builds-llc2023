import { useEffect, useState } from 'react';
import {Box,Text} from '@chakra-ui/react';


const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Box height='100vh' backgroundImage='/Loader.png'
  backgroundPosition='center' backgroundSize='cover'
  >
 


  </Box> : null;
};

export default Loader;