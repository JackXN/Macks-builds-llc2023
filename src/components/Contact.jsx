import { Fragment } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const contactOptions = [
  {
    label: 'Address',
    value: 'A108 Adam Street, NY 535022, USA',
    icon: GoLocation
  },
  {
    label: 'PHONE NUMBER',
    value: '+1 5589 55488 55',
    icon: BsPhone
  },
  {
    label: 'EMAIL',
    value: 'info@example.com',
    icon: HiOutlineMail
  }
];

const Contact = () => {
  return (
    <Container maxW="7xl" padding='50px' mt='150px' id='contact'>
      <Stack spacing={10}>
        <Flex align="center" justify="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            Still Have Questions? 
            <br/>
            Get In Touch With Us
          </Heading>
         
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack spacing={3} direction="column" justify="center" alignItems="center" px={3}>
                <Icon as={option.icon} w={10} h={10} color="yellow.400" />
                
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          padding='50px'
          w="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Ryan" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="ryan@email.com" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input type="text" placeholder="Roofing, Flooring..." rounded="md" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea size="lg" placeholder="Enter your message" rounded="md" />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="yellow.300"
              color="white"
              _hover={{
                bg: 'green.500'
              }}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
              mb='50px'
            >
              Send Message
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Contact;