"use client";
import React from 'react';
import {AiOutlinePhone as Phone} from 'react-icons/ai';
import {Flex,Text,Box} from '@chakra-ui/react'

const phone = () => {
  return (
<Flex direction='row' alignItems='center' justifyContent='center' color='white' textAlign='center'>
<Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
<Text as='h2' display='flex' justifyContent='center'
alignItems='center' fontWeight='lighter'><a href="tel:8014419433"> (801)-920-5724 </a> <Phone style={{marginLeft: '10px', fontWeight: 'light'}}/> </Text>
        </Box>
    </Flex>
  )
}

export default phone
