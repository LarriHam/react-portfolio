import {
    Box,
    Container,
    Stack,
    Flex,
    IconButton,
    Clipboard,
    Text
  } from '@chakra-ui/react'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuClipboard } from "react-icons/lu"
import { LuCheck } from "react-icons/lu"
const About = () => {
    return (
        <>
        <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 50 }}
          >
            <Text padding={'20px'}>My name is Larisa Nitu. I am a Creative Computing student at IADT. 
                I code in my free time to test my knowledge and improve.
                My specialiteis are game development and design. </Text>

            <Text pt={'50'}>Get in contact with me:</Text>
            <Flex justifyContent={'center'} padding={'10px'} mx={'30px'}>
                
                <IconButton mx={'10px'}>
                    <FaLinkedinIn />
                </IconButton>
                <IconButton mx={'10px'}>
                    <FaFacebookF />
                </IconButton>
                <IconButton mx={'10px'}>
                    <FaInstagram />
                </IconButton>
                
            </Flex>
            <Flex justifyContent={'center'}>
                <Box p="1"
                    borderWidth="1px"
                    borderColor="border.disabled"
                    color="fg.disabled">
                    <h1>larisadianaformal@gmail.com</h1>
                </Box>
                <Clipboard.Root value="larisadianaformal@gmail.com">
                    <Clipboard.Trigger asChild>
                        <IconButton>
                        <Clipboard.Indicator copied={<LuCheck />}>
                            <LuClipboard />
                        </Clipboard.Indicator>
                        </IconButton>
                    </Clipboard.Trigger>
                </Clipboard.Root>
            </Flex>    
                
        </Stack>    

        </Container>
        </>
        
    );
};

export default About;