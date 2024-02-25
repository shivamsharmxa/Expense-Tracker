import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { VStack, Center, Container, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';


const Sign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='app'>
      <Box
        position="absolute"
        width="36%"
        top="50%"
        left="81%"
        transform="translate(-50%, -50%)"
        backgroundColor="transparent"
        p="4"
        borderRadius="md" // Add border radius for styling
        boxShadow="md" // Add a box shadow for styling
      >
        <Center h="100vh">
          <Container maxW="container.sm" textAlign="center">
            <Text fontSize="5xl" fontWeight="bold" mb="6">
              Sign Up
            </Text>
            <VStack spacing='5px' align="stretch">
              <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter Your Name' color={"white"} />
              </FormControl>
              <FormControl id='email' isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type='email' placeholder='Enter Your Email Address' color={"white"} />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter Password'
                    color={"white"}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size='md'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    color={"white"}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button colorScheme='blue' width='100%' style={{ marginTop: 15 }}>
                Sign Up
              </Button>
            </VStack>
          </Container>
        </Center>
      </Box>
    </div>
  );
}

export default Sign;
