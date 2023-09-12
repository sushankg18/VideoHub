import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

  const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      pos={'fixed'}
      top={4}
      right={4}
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      zIndex={'10'}
    />
  );
};


export default ColorModeSwitcher