import React, { useState } from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
import { BsFillCaretRightFill } from "react-icons/bs";
import './Style.css';

const RoomType = () => {
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
                    <h3>Room Types</h3>
                </div>

                <div className="main-cards">
                    <div className="card" onClick={() => handleOpen('create')}>
                        <div className="card-inner">
                            <h3>Create Room Type</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <div className="card" onClick={() => handleOpen('show')}>
                        <div className="card-inner">
                            <h3>Show Room Types</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <div className="card" onClick={() => handleOpen('edit')}>
                        <div className="card-inner">
                            <h3>Edit Room Types</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <Modal isOpen={isOpen} onClose={handleClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{activeCard === 'create' ? 'Create Room Type' : activeCard === 'show' ? 'Show Room Types' : 'Edit Room Types'}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {activeCard === 'create' && (
                                    <Input placeholder="Enter room type details" />
                                )}
                                {activeCard === 'show' && (
                                    <div>
                                        {/* Show your room types here */}
                                    </div>
                                )}
                                {activeCard === 'edit' && (
                                    <div>
                                        <Input placeholder="Search for room type" />
                                        {/* Show the required details to edit room type here */}
                                    </div>
                                )}
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme="blue" mr={3} onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="ghost">Submit</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>
            </Box>
        </Box>
    );
}

export default RoomType;
