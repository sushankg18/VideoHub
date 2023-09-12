import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const HeadingOptions = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'Uppercase',
  p: '5',
  size: '2xl',
  width: 'fit-content',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} p={'15'} h={['full' ,'100vh']}>
        <Heading
          py={'2'}
          borderBottom={'2px solid black'}
          w={'fit-content'}
          margin={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          textAlign={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} filter={'hue-rotate(-180deg)'} h={['80', '400']} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'180%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium, labore facilis placeat aperiam at esse numquam quos
            fugiat excepturi temporibus sint, asperiores reprehenderit, dolor
            nesciunt rem consequatur dolore sunt. Officiis laboriosam recusandae
            similique saepe autem, iusto optio ab veritatis, cumque quidem quam
            earum alias minima ipsa! Illum, omnis quisquam. Sunt ab nulla, quae
            ad ducimus possimus repellat. Totam autem voluptatibus ad fuga
            voluptatum possimus et ut voluptatem culpa! Repudiandae quae eaque
            adipisci vitae minus voluptates, quis consequatur illo eum maxime,
            nemo nobis labore reiciendis sequi quaerat ducimus. Pariatur impedit
            illo quis deserunt, quam recusandae! Magnam quis illum eaque
            inventore! Illo!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box width={'full'} height={'100vh'}>
        <Image src={img1}></Image>
        <Heading
          bg={'whiteAlpha.500'}
          color={'blackAlpha.600'}
          {...HeadingOptions}
        >
          Watch The Future
        </Heading>
      </Box>

      <Box width={'full'} height={'100vh'}>
        <Image src={img2}></Image>
        <Heading
          bg={'blackAlpha.600'}
          color={'whiteAlpha.500'}
          {...HeadingOptions}
        >
          Future is Gaming
        </Heading>
      </Box>

      <Box width={'full'} height={'100vh'}>
        <Image src={img3}></Image>
        <Heading
          bg={'blackAlpha.600'}
          color={'whiteAlpha.500'}
          {...HeadingOptions}
        >
          Gaming Is Everything
        </Heading>
      </Box>

      <Box width={'full'} height={'100vh'}>
        <Image src={img4}></Image>
        <Heading
          bg={'blackAlpha.600'}
          color={'whiteAlpha.500'}
          {...HeadingOptions}
        >
          Night Made For Gamers
        </Heading>
      </Box>
    </Carousel>
  );
};
export default Home;
