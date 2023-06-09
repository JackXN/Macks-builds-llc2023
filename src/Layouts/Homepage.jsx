"use client";

import React from 'react';
import Hero from '../components/containers/Hero/Index';
import MobileNav from '../components/containers/Navbar/MobileNav';
import {Box, Text,Container} from '@chakra-ui/react';
import ServicesHome from '../components/containers/Services/ServicesHome';
import AboutHome from '../components/containers/About/AboutHome';
import HomeProjects from '../components/containers/Projects/HomeProjects';
import Sponsor from '../components/Sponsor';


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
<Box backgroundColor='#232632' textAlign='center' height='100%'  pt='50px'>
<HomeProjects/>
</Box>
</Box>
</>
  )
}

export default Homepage
