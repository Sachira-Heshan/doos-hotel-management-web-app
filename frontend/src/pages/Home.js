import React from 'react';
import { Box } from '@chakra-ui/react';

import {
    BsFillCaretRightFill
} from "react-icons/bs";import './Style.css'

const Home = () => {
    return (
        <Box minW={'100%'} centerContent>
            <Box maxW={'1300px'} mx={'auto'}>
                <div className='main-title'>
                    <h3>DASHBOARD</h3>
                </div>

                <div className='main-cards'>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Available Rooms</h3>
                        </div>
                        <h1>300</h1>
                    </div>

                </div>


            </Box>
        </Box>
    );
}

export default Home;