"use client";

import React from 'react';
import Hero from '../components/containers/Hero/Index';
import MobileNav from '../components/containers/Navbar/MobileNav';
import {Box, Text,Container} from '@chakra-ui/react';


import ServicesHome from '../components/containers/Services/ServicesHome';

const Homepage = () => {
  return (
<>
<Box 
backgroundPosition='center'
backgroundSize='cover'
backgroundRepeat='no-repeat'
>
<MobileNav />
        
<Hero/>
<ServicesHome/>
</Box>
</>
  )
}

export default Homepage
