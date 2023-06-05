// app/providers.tsx
'use client'


// Chakra
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import {extendTheme } from '@chakra-ui/react';


// Boxicons
import 'boxicons';

// Fonts
import '@fontsource/bungee';
import '@fontsource/lato';


const breakpoints = [    
    '480px',
    '640px',
    '768px',
    '1024px',
    '1220px',
    '1366px',
    '1620px',]
  
    const theme = extendTheme({breakpoints})



export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}