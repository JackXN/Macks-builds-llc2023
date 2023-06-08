"use client";

import React from 'react';
import Hero from '../components/containers/Hero/Index';
import MobileNav from '../components/containers/Navbar/MobileNav';
import {Box, Text,Container} from '@chakra-ui/react';


import ServicesHome from '../components/containers/Services/ServicesHome';
import AboutHome from '../components/containers/About/AboutHome';

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
<AboutHome/>
</Box>
</>
  )
}

export default Homepage
