import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='app'>
    <Box
      position="absolute"
      top={{ base: '50%', md: '48%' }}
      left={{ base: '50%', md: '81%' }}
      transform="translate(-50%, -50%)"
      backgroundColor="rgb(66 153 225 / 6%)"
      p="4"
      borderRadius="md" // Add border radius for styling
      boxShadow="md" // Add a box shadow for styling
      width={{ base: '90%', md: 'auto' }}
      maxW="300px"
    >
      <VStack spacing="5px" color="black" width="100%">
        <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" mb="4">
          Login
        </Text>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter Your Email" color={'white'} />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password Please"
              color={'white'}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button colorScheme="blue" width="100%" mt={4}>
          Log In
        </Button>
      </VStack>
    </Box>
  </div>
  );
};

export default Login;
