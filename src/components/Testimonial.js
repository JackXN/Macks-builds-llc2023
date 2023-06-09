import React from 'react';
import { Box, Container, Text, Avatar, Flex } from '@chakra-ui/react';

const Testimonial = ({ image, name, role, content }) => {
  return (
    <Box
      maxW="lg"
      maxH='auto'
      mx="auto"
      p={8}
      bg="white"
      boxShadow="lg"
      rounded="lg"
      textAlign="center"
      marginTop="30px"
      marginBottom="30px"
    >
      <Avatar size="xl" name={name} src={image} mb={4} />
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        {name}
      </Text>
      <Text color="gray.600" fontSize="sm" mb={4}>
        {role}
      </Text>
      <Text>{content}</Text>
    </Box>
  );
};

const TestimonialSlider = () => {
    const testimonials = [
        {
          image: 'testimonial1.jpg',
          name: 'John Smith',
          role: 'Homeowner',
          content: 'Macks Builds LLC did an excellent job renovating our kitchen. The quality of their workmanship and attention to detail exceeded our expectations. We highly recommend them for any home improvement project.',
        },
        {
          image: 'testimonial2.jpg',
          name: 'Jane Johnson',
          role: 'Business Owner',
          content: 'I hired Macks Builds LLC to construct a new commercial building for my business. They demonstrated professionalism, expertise, and excellent communication throughout the entire process. The project was completed on time and within budget. I couldnt be happier with the results.',
        },
        {
          image: 'testimonial3.jpg',
          name: 'David Williams',
          role: 'Real Estate Investor',
          content: 'As a real estate investor, I have worked with Macks Builds LLC on multiple renovation projects. Their team is highly skilled and efficient. They consistently deliver top-notch work and help me maximize the value of my properties. I highly recommend their services.',
        },
        {
          image: 'testimonial4.jpg',
          name: 'Sarah Davis',
          role: 'Interior Designer',
          content: 'Collaborating with Macks Builds LLC has been a pleasure. They have a deep understanding of design concepts and bring them to life with precision. Their craftsmanship and attention to detail elevate the spaces I design. I look forward to working with them on future projects.',
        },
  
      ];
      

  return (
    <Container py={12}>
      <Flex justifyContent="center" flexWrap='wrap' flexDirection={['column', 'column','column','row']} mx={-4}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} px={4}>
            <Testimonial {...testimonial} />
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default TestimonialSlider;
