import React from 'react'

import { Box, Container, Text, VStack, FormControl, FormLabel, Input, Button, FormErrorMessage } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

const Login = () => {
    return (
        <Container minW={'100%'} minH={'100vh'} centerContent>
            <Container maxW={'lg'} mt={12} centerContent>
                <Box p={6} borderRadius={8} w={'sm'} maxW={'sm'} bg={'#ffb300'}>
                    <VStack>
                        <LockIcon w={6} h={6} />
                        <Text fontSize={'lg'} fontWeight='bold'>Login</Text>
                        <form style={{ width: '100%' }}>
                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' />
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input type='password' />
                            </FormControl>
                            <Button mt={4} w={'100%'} >Login</Button>
                        </form>
                    </VStack>
                </Box>
            </Container>
        </Container>
    );
}

export default Login;