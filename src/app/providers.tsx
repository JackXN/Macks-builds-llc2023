// app/providers.tsx
"use client";


//aos config
import initializeAOS from '../../aos';


import "flowbite";
import { useState, useEffect } from "react";

// Tailwind
// import 'tailwindcss/tailwind.css';

// Loader
import Loader from "../components/Loader";

// Chakra
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// Fonts
import "@fontsource/bungee";
import "@fontsource/lato";
import "@fontsource/barlow-semi-condensed";

const breakpoints = [
  "480px",
  "640px",
  "768px",
  "1024px",
  "1220px",
  "1366px",
  "1620px"
];

const theme = extendTheme({
  breakpoints,

  styles: {
    global: {
      html: {
        backgroundColor: "white"
      },
      h1: {
        fontSize: ["35px"],
        fontFamily: "Lato",
        fontWeight: "black"
      },
      h3: {
        color: "orange",
        fontFamily: 'Lato',
        fontWeight: 'black',
        
      },
      h2: {
        fontSize: "23px",
        fontFamily: "Lato",
        fontWeight: "black",
        mt: ["25px"],
        mb: ["10px"]
      },
      p: {
        fontSize: ["18px"],
        fontFamily: "Barlow Semi Condensed",
        mt: ["25px"],
        mb: ["25px"],
        fontWeight: 'black'
      }
    }
  }
});

export function Providers({ children }: { children: React.ReactNode }) {
  
  useEffect(() => {
    initializeAOS();
  }, []);

  
  
  
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
