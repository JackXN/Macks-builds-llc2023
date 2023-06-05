"use client";

import React from 'react';
import Hero from '../components/containers/Hero/Index';
import MobileNav from '../components/containers/Navbar/MobileNav';
import {Box, Text,Container} from '@chakra-ui/react';

const Homepage = () => {
  return (
<>
<Box backgroundImage='./HeroBgTwo.png' 
backgroundPosition='center'
backgroundSize='cover'
backgroundRepeat='no-repeat'
>
<MobileNav />
        
<Hero/>
</Box>
</>
  )
}

export default Homepage
