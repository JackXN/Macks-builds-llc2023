"use client" ;
import Image from 'next/image';
import MobileNav from '../components/containers/Navbar/MobileNav';
import DesktopNav from '../components/containers/Navbar/DesktopNav';
import {Text, Box} from '@chakra-ui/react';
import HomePage from '../Layouts/Homepage';
import Footer from '../components/Footer';
export default function Home() {
return (
  <>
        <Box >
        <HomePage/>
        <Footer/>
        </Box>
      </>
    );
  
}
