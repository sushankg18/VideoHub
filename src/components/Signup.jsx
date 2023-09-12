import {
  Container,
  Input,
  VStack,
  Heading,
  Button,
  HStack,
  Text,
  Avatar
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxWidth={'container.xl'} height={'100vh'} p={'16'}>
      <form action="">
        <VStack
          w={['full', '96']}
          alignItems={'stretch'}
          m={'auto'}
          spacing={'8'}
        >
          <Heading color="purple">VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} />

          <Input
            required
            type={'Name'}
            placeholder="Name"
            focusBorderColor="purple"
          />

          <Input
            required
            type={'Email'}
            placeholder="Email id"
            focusBorderColor="purple"
          />
          <Input
            required
            type={'password'}
            placeholder="password"
            focusBorderColor="purple-400"
          />
          <Button colorScheme="purple" variant={'solid'} type={'submit'}>
            Sign Up
          </Button>


          <HStack alignSelf={'flex-end'}>
            <Text>Already a user ?</Text>
            <Button
              colorScheme="purple"
              variant={'link'}
              alignSelf={'flex-end'}
            >
              <Link to={'/login'}>Login</Link>
            </Button>
          </HStack>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
