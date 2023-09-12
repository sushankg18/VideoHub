import { Container, Input, VStack, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container w={'Container.xl'} h={'100vh'}  p={'16'}>
      <VStack h={'full'} justifyContent={'center'}>
        <form>
          <AiOutlineCloudUpload size={'10vmax'} color={'purple'} />

          <HStack alignItems={'center'}>
            <Input required type={'file'} css={{
                '&::file-selector-button' : {
                    border :'none',
                    width : 'calc(100% + 36px)',
                    height : '100%',
                    marginLeft : '-18px',
                    color:'purple',
                    backgroundColor :'white',
                    cursor:'pointer'
                }
            }}/>
            <Button type={'submit'} colorScheme='purple' variant={'ghost'}>Submit</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
