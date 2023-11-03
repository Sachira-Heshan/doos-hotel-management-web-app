import React, { useState } from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
import { BsFillCaretRightFill } from "react-icons/bs";
import './Style.css';

const Rooms = () => {
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
                    <h3>Rooms</h3>
                </div>

                <div className="main-cards">
                    <div className="card" onClick={() => handleOpen('create')}>
                        <div className="card-inner">
                            <h3>Create New Room</h3>
                            <BsFillCaretRightFill className="card_icon" />
                        </div>
                    </div>

                    <Modal isOpen={isOpen} onClose={handleClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{activeCard === 'create' ? 'Create New Room' : ''}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {activeCard === 'create' && (
                                    <Input placeholder="Enter room details" />
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

export default Rooms;
