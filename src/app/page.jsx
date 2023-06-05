"use client" ;
import Image from 'next/image';
import MobileNav from '../components/containers/Navbar/MobileNav';
import DesktopNav from '../components/containers/Navbar/DesktopNav';
import {Text} from '@chakra-ui/react';
import HomePage from '../Layouts/Homepage';
import Construction from '../../src/app/Construction/page';
import Homepage from '../Layouts/Homepage';

export default function Home() {
  let construction = false;

return (
  <>
          {/* <MobileNav />
        <DesktopNav /> */}
        <Homepage/>

      </>
    );
  
}
