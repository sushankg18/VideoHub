import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="purple"
        h={10}
        w={10}
        pos={'fixed'}
        top={4}
        left={4}
        size={'3'}
        onClick={onOpen}
        zIndex={'10'}
      >
        <BiMenu />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Videos Hub</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to="/">Home</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to="/videos">Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to="/videos?category=free">Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to="/upload">Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={4}
              left={0}
              paddingLeft={4}
              w={'full'}
              gap={5}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to="/login">Log In</Link>
              </Button>

              <Button onClick={onClose} variant={'outline'} colorScheme="purple">
                <Link to="/signup">Sign Up</Link>
              </Button> 
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
