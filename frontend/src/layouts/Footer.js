import React from 'react';

import { Box, Center } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box minW={'100%'} py={3} position={'fixed'} bottom={'0'} bg={'blue.300'}>
            <Center alignItems={'center'} justifyContent={'center'}>
                <div style={{}}>All rights reserved. Copyrights @ Team DooS</div>
            </Center>
        </Box>
    );
}

export default Footer;