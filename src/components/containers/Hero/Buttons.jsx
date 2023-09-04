import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll';


const Buttons = () => {
  return (
    <Box sx={styles.buttonContainer}>
      <ScrollLink
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        cursor='pointer'
      >
        <Button bg="#D9C05B" color="white" cursor='pointer'>
          Our Services
        </Button>
      </ScrollLink>
      <Link
        activeClass="active"
        href='https://www.dopl.utah.gov'
        offset={50}
        target='_blank'
      >
        <Button color="#D9C05B" bg="none">
         Licensing Provider
        </Button>
      </Link>
    </Box>
  );
};

const styles = {
  buttonContainer: {
    mt: ['50px'],
    // alignItems: 'center',
    // display: 'flex',
    // textAlign: 'center',
    zIndex: 10,

    Button: {
      margin: '10px 10px',
      fontFamily: '',
    },
  },
};

export default Buttons;
