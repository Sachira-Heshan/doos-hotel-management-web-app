import React, { useState } from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
import { BsFillCaretRightFill } from "react-icons/bs";
import './Style.css';

const Reservation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCard, setActiveCard] = useState('');

    const handleOpen = (card) => {
        setActiveCard(card);
        setIsOpen(true);
    }
    const handleClose = () => setIsOpen(false);

    return (
        <Box minW={'100%'} centerContent>
            <Box maxW={'1300px'} mx={'auto'}>
                <div className="main-title">
                    <h3>Reservation</h3>
                </div>

                <div className="main-cards">
                    <div className="card" onClick={() => handleOpen('create')}>
                        <div className="card-inner">
                            <h3>Create New Reservation</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <div className="card" onClick={() => handleOpen('show')}>
                        <div className="card-inner">
                            <h3>Show Reservation List</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <div className="card" onClick={() => handleOpen('edit')}>
                        <div className="card-inner">
                            <h3>Edit Reservations</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <div className="card" onClick={() => handleOpen('cancel')}>
                        <div className="card-inner">
                            <h3>Cancel Reservations</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <Modal isOpen={isOpen} onClose={handleClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{activeCard === 'create' ? 'Create New Reservation' : activeCard === 'show' ? 'Show Reservation List' : activeCard === 'edit' ? 'Edit Reservations' : 'Cancel Reservations'}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {activeCard === 'create' && (
                                    <Input placeholder="Enter reservation details" />
                                )}
                                {activeCard === 'show' && (
                                    <div>
                                        {/* Show your reservation list here */}
                                    </div>
                                )}
                                {activeCard === 'edit' && (
                                    <div>
                                        <Input placeholder="Search for reservation" />
                                        {/* Show the required details to edit reservation here */}
                                    </div>
                                )}
                                {activeCard === 'cancel' && (
                                    <div>
                                        <Input placeholder="Search for reservation to cancel" />
                                        {/* Show the required details to cancel reservation here */}
                                    </div>
                                )}
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme="blue" mr={3} onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="ghost">Secondary Action</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>
            </Box>
        </Box>
    );
}

export default Reservation;
