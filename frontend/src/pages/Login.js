import React from 'react'
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { useFormik } from "formik";

import { Box, Container, Text, VStack, FormControl, FormLabel, Input, Button, FormErrorMessage } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

const Login = () => {

    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log(values);
        navigate('/dashboard');
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (values) => { handleSubmit(values) },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
        }),
    });

    return (
        <Container minW={'100%'} minH={'100vh'} centerContent>
            <Container maxW={'lg'} mt={12} centerContent>
                <Box p={6} borderRadius={8} w={'sm'} maxW={'sm'} bg={'#2962ff'}>
                    <VStack>
                        <LockIcon w={6} h={6} color={'white'} />
                        <Text fontSize={'lg'} fontWeight='bold' color={'white'}>Login</Text>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                formik.handleSubmit();
                            }}
                            style={{ width: '100%' }}>
                            <FormControl mt={4}>
                                <FormLabel color={'white'}>Username</FormLabel>
                                <Input
                                    type='username'
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("username")}
                                />
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel color={'white'}>Password</FormLabel>
                                <Input
                                    type='password'
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("password")}
                                />
                            </FormControl>
                            <Button mt={4} w={'100%'} type='submit'>Login</Button>
                        </form>
                    </VStack>
                </Box>
            </Container>
        </Container>
    );
}

export default Login;