import React from 'react';
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Center,
  Text,  // Import Text component from Chakra UI
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Center h="100vh">
      <VStack spacing={'5px'} color={'black'} width="300px">
        <Text fontSize="xl" fontWeight="bold" mb="4">Login</Text> {/* Add a title here */}
        
        <FormControl id='email' isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder='Enter Your Email'
          />
        </FormControl>

        <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size='md'>
            <Input
              type='password'
              placeholder='Enter Password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm'>
                Show
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme='blue'
          width='100%'
          style={{ marginTop: 15 }}
        >
          Log In
        </Button>
        
      </VStack>
    </Center>
  );
};

export default Login;
