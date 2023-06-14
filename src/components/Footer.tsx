import { Box, Heading, Flex, List, ListItem, Link, Text, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.100"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
    >
      <Flex
        maxW="64rem"
        mx="auto"
        justifyContent="space-between"
        px={{ base: "1rem", lg: "0" }}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
           {/* <Image src="/Logo.png" alt="Airbnb Logo" maxH="10rem" mb="1rem" maxW='10rem'/> */}
        <Box flexBasis={{ base: "100%", lg: "25%" }} mb={{ base: "1.5rem", lg: "0" }}>
          <Heading
            as="h5"
            color="gray.700"
            mb="0.5rem"
            fontSize="0.875rem"
            fontWeight="600"
          >
            Discover
          </Heading>
          <List lineHeight="2">
            <ListItem>
              <Link href="#" fontWeight="600" color="rgba(113, 128, 150, 1)">
                Trust & Safety
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" fontWeight="600" color="rgba(113, 128, 150, 1)">
            Recent Projects
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" fontWeight="600" color="rgba(113, 128, 150, 1)">
                Gallery
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box flexBasis={{ base: "100%", lg: "25%" }} mb={{ base: "1.5rem", lg: "0" }}>
          <Heading
            as="h5"
            color="gray.700"
            mb="0.5rem"
            fontSize="0.875rem"
            fontWeight="600"
          >
            Navigation
          </Heading>
          <List lineHeight="2">
            <ListItem>
              <Link href="#" fontWeight="600" color="rgba(113, 128, 150, 1)">
                About Us
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" fontWeight="600" color="rgba(113, 128, 150, 1)">
                Contact Us
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" fontWeight="600" color="rgba(113, 128, 150, 1)">
                Frequently Asked Questions
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" fontWeight="600" color="rgba(113, 128, 150, 1)">
              Reviews
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box flexBasis={{ base: "100%", lg: "25%" }} mb={{ base: "1.5rem", lg: "0" }}>
         
          <List lineHeight="2">
            <ListItem> 
              
            </ListItem>
          </List>
        </Box>
      </Flex>
      <Text
        textAlign="center"
        mt="2rem"
        color="gray.500"
        fontSize="0.75rem"
      >
        &copy; {new Date().getFullYear()} Macks Builds LLC. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
