
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 50 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Welcome to <br />
            <Text as={'span'} >
              Larisa Nitu's Portfolio
            </Text>
          </Heading>
          <Text color={'gray.500'} py={{ base: 20, md: 5 }}>
            Want to find out what I'm capable of? Start viewing my projects now!
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button             
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'grey',
              }} > <a href={"/projects"}>View Projects</a>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}




// const Home = () => {
//     return (
//         <h1>Hello from Home page</h1>
//     );
// };

// export default Home;