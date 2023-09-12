import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BiSend } from 'react-icons/bi';
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} width={'full'} px={'4'}>
          <Heading>Want To talk ?</Heading>
          <VStack gap={'20px'} alignItems={'flex-start'}>
              <form action="">
            <HStack borderBottom={'1px solid white'} py={'2'}>

              <Input
                placeholder="Email Id"
                color="white"
                border="none"
                fontSize="medium"
                type="email"
                required
                _focus={{
                  outline: "none",
                  borderColor: "transparent", // Optionally set border color to transparent
                  boxShadow: "none",
                }}
                />
            </HStack>
            <HStack border={'none'} py={'2'} borderBottom={'1px solid white'}>
              <Input
                placeholder="Enter something Here"
                color={'white'}
                border={'none'}
                required
                boxShadow={'none'}
                outline={'none'}
                fontSize={'medium'}
                type={'text'}
                _focus={{
                  outline: "none",
                  borderColor: "transparent", // Optionally set border color to transparent
                  boxShadow: "none",
                }}
              />
              <Button type={'submit'}>
                <BiSend size={'19'} />
              </Button>
            </HStack>
                </form>
          </VStack>
        </VStack>

        <VStack
          width={'full'}
          borderLeft={'1px solid white'}
          borderRight={'1px solid white'}
        >
          <Heading>VIDEO HUB</Heading>
          <Text>@All rights reserved</Text>
        </VStack>

        <VStack
          width={'full'}
          borderRight={'1px solid white'}
          alignItems={'flex-start'}
          px={'5'}
          justifyContent={'center'}
        >
          <Heading>Social Media</Heading>
          <HStack cursor="pointer">
            <AiFillGithub size={20} />
            <Link href="https://github.com/sushankg18" isExternal>
              <Text>Github</Text>
            </Link>
          </HStack>
          <HStack cursor="pointer">
            <AiFillFacebook size={20} />
            <Link href="https://github.com/sushankg18" isExternal>
              <Text>facebook</Text>
            </Link>
          </HStack>
          <HStack cursor="pointer">
            <AiFillLinkedin size={20} />
            <Link href="https://github.com/sushankg18" isExternal>
              <Text>Linkedin</Text>
            </Link>
          </HStack>

          <HStack cursor="pointer">
            <AiFillInstagram size={20} />
            <Link href="https://github.com/sushankg18" isExternal>
              <Text>Instagram</Text>
            </Link>
          </HStack>

          <HStack cursor="pointer">
            <AiFillYoutube size={20} />
            <Link href="https://github.com/sushankg18" isExternal>
              <Text>Youtube</Text>
            </Link>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
