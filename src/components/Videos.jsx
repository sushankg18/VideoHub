import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const VideosArr = [
    'https://media.istockphoto.com/id/1417587402/video/interior-design-studio-designers-with-architects-and-clients-select-solutions-and.mp4?s=mp4-640x640-is&k=20&c=80HIhx6qVoBpunZGCDfu_Tza9d_6kWfmDFCafqUdMww=',
    'https://media.istockphoto.com/id/1447621737/video/passenger-ship-little-planet-format.mp4?s=mp4-640x640-is&k=20&c=vit3Z5SeU3O414TgQSpBdCXPxm1O5n8wtCAu2VmRvE4=',
    'https://media.istockphoto.com/id/1442442429/video/day-to-night-time-lapse-of-crowded-business-people-working-and-meeting-in-office-business.mp4?s=mp4-640x640-is&k=20&c=y21WzBhoU_ObzoBfqUSrtU0js_W72TxLg6KtxezJWC0=',
    'https://media.istockphoto.com/id/1437408088/video/aerial-view-of-house-solar-panels.mp4?s=mp4-640x640-is&k=20&c=kCobt356P9vvbZGbCv5xKv-Db2WrGxRS2LLSryqv1-s=',
    'https://media.istockphoto.com/id/1424350177/video/soccer-player-doing-a-foul-against-rival-soccer-player.mp4?s=mp4-640x640-is&k=20&c=gtPCVQRo0CG1g4FmKp1fGXu35MWmp_fV6-rXqc8S5Xs=',
  ];

  const [videoSrc, setvideoSrc] = useState(VideosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={['full' ,'100vh']} p={'5'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} overflowY={'auto'}>
              <Heading>Lecture Video</Heading>
          <Text>
            Hey iam description area wanna get something news from me Hey iam
            description area wanna get something news from me iam description
            area wanna get something news from me description area wanna get
            something news from me description area wanna get something news
            from me Hey iam wanna get something news from me Hey iam description
            area news from me Hey iam description area wanna get something Hey
            iam description area wanna get something news from me
          </Text>
        </VStack>
      </VStack>

      <VStack w={['full' , 'xl']} px={'2'} gap={'5'}>
        {VideosArr.map((item, index) => (
          <Button
            key={index}
            w={'full'}
            variant={'solid'}
            colorScheme="purple"
            onClick={() => setvideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
