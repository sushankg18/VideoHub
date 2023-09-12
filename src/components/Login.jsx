import {
  Container,
  Input,
  VStack,
  Heading,
  Button,
  HStack,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth={'container.xl'} height={'100vh'} p={'16'}>
      <form action="">
        <VStack
          w={['full', '96']}
          alignItems={'stretch'}
          m={'auto'}
          spacing={'8'}
        >
          <Heading color="purple">Welcome Back</Heading>
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
            Log In
          </Button>

          <Button colorScheme="purple" variant={'link'} alignSelf={'flex-end'}>
            <Link>Forgot password</Link> 
          </Button>

          <HStack alignSelf={'flex-end'}>
            <Text>New user?</Text>
            <Button
              colorScheme="purple"
              variant={'link'}
              alignSelf={'flex-end'}
            >
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </HStack>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
