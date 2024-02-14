import React from 'react';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { VStack, Center, Container, Text } from '@chakra-ui/layout';


const Sign = () => {
  return (
    <Center h="100vh">
      <Container maxW="container.sm" textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" mb="6">
          Sign Up
        </Text>
        <VStack spacing='5px' align="stretch">
          <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Enter Your Name' />
          </FormControl>
          <FormControl id='email' isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type='email' placeholder='Enter Your Email Address' />
          </FormControl>
          <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
              <Input placeholder='Enter Password' />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm'>
                 Show
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id='confirm-password' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size='md'>
              <Input placeholder='Confirm Password' />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm'>
                  Show
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
  );
}

export default Sign;
