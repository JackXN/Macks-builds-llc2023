import React, { useState } from 'react';
import {
  Box,
  Container,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import Footer from './Footer';


const LeftContainer = () => {
    return (
        <Box height='50vh' background='orange'>
<h1>Hello</h1>
        </Box>
    )
}



const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What services does your contracting company provide?',
      answer:
        'Our contracting company offers a wide range of services, including home renovations, remodeling, construction, additions, and general contracting. We specialize in both residential and commercial projects.',
    },
    {
      question: 'How long has your company been in business?',
      answer:
        'We have been in the contracting business for over 10 years. Our team consists of experienced professionals who have a wealth of knowledge and expertise in the industry.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes, we are fully licensed and insured. We prioritize the safety and protection of our clients and employees, and maintaining proper licensing and insurance coverage is a crucial aspect of our business.',
    },
    {
      question: 'Do you provide free estimates?',
      answer:
        'Absolutely! We offer free estimates for all our services. Our team will assess your project requirements, provide detailed cost estimates, and discuss the scope of work with you.',
    },
    {
      question: 'Can you provide references from past clients?',
      answer:
        'Yes, we can provide references from our satisfied clients. We have built strong relationships with our customers, and we are proud of the positive feedback and testimonials we have received.',
    },
    {
      question: 'What is your project timeline and how do you manage it?',
      answer:
        'The project timeline depends on the scope and complexity of the project. We create a detailed project plan that includes milestones and deadlines. Our project managers closely monitor the progress and coordinate with the team to ensure timely completion.',
    },
    {
      question: 'How do you handle permits and building regulations?',
      answer:
        'We are well-versed in local building codes and regulations. Our team takes care of obtaining the necessary permits and ensures that all construction work complies with the required standards and regulations.',
    },
    {
      question: 'What sets your company apart from others?',
      answer:
        'We pride ourselves on our commitment to quality craftsmanship, attention to detail, and exceptional customer service. Our team works closely with clients to understand their vision and deliver results that exceed expectations.',
    },
  ];

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };



  return (
<>
    {/* // <Container display='flex' > */}
      <Box maxW="2xl" mx="auto" mt='150px' id='faq'>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={6} color="black">
          Frequently Asked Questions
        </Text>
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} mb={4}>
              <h2>
                <AccordionButton
                  onClick={() => handleAccordionClick(index)}
                  bg={activeIndex === index ? 'gray.200' : 'white'}
                  _hover={{ bg: 'gray.200' }}
                  p={4}
                  borderRadius="md"
                  fontWeight="bold"
              
                >
                  <Box flex="1" textAlign="left">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                pt={2}
                
                display={activeIndex === index ? 'block' : 'none'}
                color="black"
              
              >
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
  <Footer/>   
</>
  );
};

export default FAQ;