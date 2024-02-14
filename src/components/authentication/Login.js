import React from 'react';
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
  return (
    <Box
      position="absolute"
      top="50%"
      left="81%"
      transform="translate(-50%, -50%)"
      backgroundColor="transparent"
      p="4"
      borderRadius="md" // Add border radius for styling
      boxShadow="md" // Add a box shadow for styling
    >
      <VStack spacing="5px" color="black" width="300px">
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Login
        </Text>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter Your Email" />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input type="password" placeholder="Enter Password" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm">
                Show
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}>
          Log In
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
