import React from 'react';
import { Box, Flex, Text, Avatar, Container, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

const Testimonial = ({ image, name, role, content }) => {
  const gridColumns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Box p={3} maxW="sm" bg='white' borderRadius='md' margin='10px' boxShadow='lg' transition="transform 0.3s ease-in-out"
    _hover={{ transform: 'translateY(-8px)', boxShadow: 'xl black', cursor: 'pointer' }}>
      <Flex direction="column" alignItems="center">
        <Avatar size="xl" name={name} src={image}  />
        <Text fontWeight="bold" fontSize="md" >
          {name}
        </Text>
        <Text color="gray.600" fontSize="sm" >
          {role}
        </Text>
        <Text>{content}</Text>
      </Flex>
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
      content: 'I hired Macks Builds LLC to construct a new commercial building for my business. They demonstrated professionalism, expertise, and excellent communication throughout the entire process. The project was completed on time and within budget. I couldn\'t be happier with the results.',
    },
    {
      image: 'testimonial2.jpg',
      name: 'Jane Johnson',
      role: 'Business Owner',
      content: 'I hired Macks Builds LLC to construct a new commercial building for my business. They demonstrated professionalism, expertise, and excellent communication throughout the entire process. The project was completed on time and within budget. I couldn\'t be happier with the results.',
    },
    // Add more testimonials here...
  ];

  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Container maxW="container.xl" padding='50px'>
      <Flex columns={gridColumns}  flexWrap='wrap' spacing={10} mt={8} justifyContent='center' >
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Flex>
    </Container>
  );
};

export default TestimonialSlider;
