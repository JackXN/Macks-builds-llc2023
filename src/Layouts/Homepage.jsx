import React from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import MobileNav from '../components/containers/Navbar/MobileNav';
import ServicesHome from '../components/containers/Services/ServicesHome';
import AboutHome from '../components/containers/About/AboutHome';
import HomeProjects from '../components/containers/Projects/HomeProjects';
import Sponsor from '../components/Sponsor';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import Hero from '../components/containers/Hero/Index';
import DesktopHero from '../components/containers/Hero/DesktopHero';
import DesktopNav from '@/components/containers/Navbar/DesktopNav';

const Homepage = () => {
  const isMobile = useBreakpointValue({ base: true, lg: true });

  return (
    <>
      <Box
      // overflowx='hidden'
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        overlfowX='hidden'
      >
        <MobileNav/>
       {/* <DesktopNav/> */}

          <DesktopHero/>
          <Hero/>
      

        <ServicesHome />
        <AboutHome />
        <Box backgroundColor="#232632" textAlign="center" height="100%" pt="50px">
          <HomeProjects />

          <Box mt="50px">
            <Text as="h3">Testimonials</Text>
            <Text as="h1" color="white">
              See What Our Customers <br /> Are Saying About Us
            </Text>
            <Testimonial />
          </Box>

          <Box bg="white" pt="50px">
            <FAQ />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
