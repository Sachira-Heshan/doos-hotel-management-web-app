import React from 'react';

import { Box } from '@chakra-ui/react';

import {
    BsFillCaretRightFill
} from "react-icons/bs";import './Style.css'

const Reservation = () => {
    return (
        <Box minW={'100%'} centerContent>
            <Box maxW={'1300px'} mx={'auto'}>
                <div className="main-title">
                    <h3>Reservation</h3>
                </div>

                <div className="main-cards">
                    <div className="card">
                        <div className="card-inner">
                            <h3>Create New Reservation</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <h3>Show Reservation List</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <h3>Edit Reservations</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <h3>Cancel Reservations</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
}

export default Reservation;