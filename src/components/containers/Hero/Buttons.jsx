import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-scroll';

const Buttons = () => {
  return (
    <Box sx={styles.buttonContainer}>
      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <Button bg="#D9C05B" color="white">
          Our Services
        </Button>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <Button color="#D9C05B" bg="none">
          Featured Projects
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
