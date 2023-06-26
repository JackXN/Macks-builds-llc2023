import React, { useState, useEffect } from "react";
import { Box, Text, useBreakpointValue, Container } from "@chakra-ui/react";
import MobileNav from "../components/containers/Navbar/MobileNav";
import ServicesHome from "../components/containers/Services/ServicesHome";
import AboutHome from "../components/containers/About/AboutHome";
import HomeProjects from "../components/containers/Projects/HomeProjects";
import Sponsor from "../components/Sponsor";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import Hero from "../components/containers/Hero/Index";
import DesktopHero from "../components/containers/Hero/DesktopHero";
import DesktopNav from "@/components/containers/Navbar/DesktopNav";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Contact from "../components/Contact";

const Homepage = () => {
  const isMobile = useBreakpointValue({ base: true, lg: true });

  return (
    <>
      <Box
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <DesktopHero id="home" />
        <Hero id="home" />
        <ServicesHome />
        <AboutHome />
        <Box
          backgroundColor="#232632"
          textAlign="center"
          height="80vh"
          pt="50px"
        >
          <HomeProjects />
          <Box mt="50px">
            <FAQ />
          </Box>
        </Box>
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default Homepage;
