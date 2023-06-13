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

  return isLoading ? <Box height='100vh' bg='orange'>
    <h1>WELCOME</h1>


  </Box> : null;
};

export default Loader;