import React from 'react';
import Image from 'next/image';
import { Box,Text } from '@chakra-ui/react';

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
  // {
  //   imageName: 'Milwakee Logo',
  //   image: '/LogoFour.png'
  // }
];

const Sponsor = () => {
  return (
    <Box mt='150px'>
      <Text as='h3' color='gray.500'>We Proudly Support</Text>
      <Box sx={styles.logoContainer}>
        {images.map((item, index) => (
          <Box key={index} margin="20px" data-aos='fade-in' data-aos-duration='2000'>
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
