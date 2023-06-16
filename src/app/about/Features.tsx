import { Container, Box, chakra, Text, Icon, SimpleGrid, Image } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdOutlinePersonPin, MdPermDeviceInformation, MdOutlineFlashlightOn } from 'react-icons/md';
import {IoMdTime} from 'react-icons/io';
import {BiMoneyWithdraw} from 'react-icons/bi'
import { SiMinds } from 'react-icons/si';
import { IconType } from 'react-icons';

interface IFeature {
  heading: string;
  content: string;
  icon: IconType;
}


  const features: IFeature[] = [
    {
      heading: "Experience and Expertise",
      content:
        "With years of experience in the construction industry, our contractors bring a wealth of knowledge, skills, and expertise to every project. We have successfully completed numerous projects, delivering outstanding results.",
        icon: MdOutlineFlashlightOn
      },
    {
      heading: "Quality Craftsmanship",
      content:
        "We pride ourselves on delivering top-notch craftsmanship. Our team pays meticulous attention to detail and strives for excellence in every aspect of the construction process. We are committed to ensuring the highest quality standards.",
        icon: MdOutlinePersonPin
      },
    {
      heading: "Customer-Centric Approach",
      content:
        "At Macks Builds LLC, we prioritize our clients' satisfaction. We listen to their needs, understand their vision, and tailor our services to meet their requirements. Our customer-centric approach ensures that we deliver personalized solutions.",
        icon: SiMinds
      },
    {
      heading: "Timely Project Completion",
      content:
        "We understand the importance of timely project completion. Our contractors work diligently to meet deadlines and ensure that projects are delivered on time. We maintain open communication to keep clients informed throughout the process.",
      icon: IoMdTime
      },
    {
      heading: "Transparent Communication",
      content:
        "We believe in transparent communication with our clients. We keep them informed about project progress, milestones, and any challenges that may arise. We value clear and honest communication to foster strong client relationships.",
        icon: MdPermDeviceInformation
      },
    {
      heading: "Attention to Budget",
      content:
        "We understand the significance of budget constraints. Our contractors work closely with clients to develop cost-effective solutions without compromising on quality. We aim to provide value for money and maximize the return on investment.",
        icon: BiMoneyWithdraw
      },
  ]



const Features = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }} mt='50px'>

      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={12} mb={4} padding='50px'>
        {features.map((feature, index) => (
          <Box key={index} textAlign="center">
            <Icon as={feature.icon} w={10} h={10} color="yellow.400" />
            <chakra.h2 fontWeight="semibold" fontSize="2xl">
              {feature.heading}
            </chakra.h2>
            <Text fontSize="md" as='p'>{feature.content}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;