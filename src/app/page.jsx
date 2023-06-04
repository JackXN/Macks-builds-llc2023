"use client" ;
import Image from 'next/image';
import MobileNav from '../components/containers/Navbar/MobileNav';
import DesktopNav from '../components/containers/Navbar/DesktopNav';
import {Text} from '@chakra-ui/react';


export default function Home() {

  return (
    <>
<DesktopNav/>
<MobileNav/>
  
   </>
  )
}
