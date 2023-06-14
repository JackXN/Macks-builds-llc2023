"use client" ;
import {useState,useEffect} from 'react';
import Image from 'next/image';
import MobileNav from '../components/containers/Navbar/MobileNav';
import DesktopNav from '../components/containers/Navbar/DesktopNav';
import {Text, Box} from '@chakra-ui/react';
import HomePage from '../Layouts/Homepage';
import Footer from '../components/Footer'
import Loader from '../components/Loader';






export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2000 milliseconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



return (
  <>
  {isLoading ? <Loader/> :
    <Box>
    <HomePage/>
    <Box alignContent='center' justifyContent='center' bg='red' flexDirection='column'>
    <Footer/>
    </Box>
    </Box>
  }
      
      </>
    );
  
}
