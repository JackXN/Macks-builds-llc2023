import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

const images = [
  {
    imageName: 'CraftMan Logo',
    image: '/logoOne.png'
  },
  {
    imageName: 'Dewalt Logo',
    image: '/logoTwo.png'
  },
  {
    imageName: 'Makita Logo',
    image: '/logoThree.png'
  },
  {
    imageName: 'Milwakee Logo',
    image: '/LogoFour.png'
  }
];

const Sponsor = () => {
  return (
    <Box mt='150px'>
      <h3>We Proudly Support</h3>
      <Box sx={styles.logoContainer}>
        {images.map((item, index) => (
          <Box key={index} margin="20px">
            <Image src={item.image} alt={item.imageName} width="100" height="100" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};


const styles = {
  logoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '30px'
  }
}

export default Sponsor;
