import React from "react";

import { NavLink } from "react-router-dom";

import { Box, VStack, HStack, UnorderedList, ListItem } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Box minW={'100%'} minH={'60px'} bg={'#32a852'}>
            <HStack spacing={6} alignItems={"center"} justifyContent={"center"}>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
                <NavLink to={'/rooms'}>Rooms</NavLink>
                <NavLink to={'/roomtype'}>Room Type</NavLink>
                <NavLink to={'/reservation'}>Reservation</NavLink>
                <NavLink to={'/'}>Login</NavLink>
                {/* <UnorderedList styleType={"none"}>
                    <ListItem>
                        <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={'/rooms'}>Rooms</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={'/roomtype'}>Room Type</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={'/reservation'}>Reservation</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={'/'}>Login</NavLink>
                    </ListItem>
                </UnorderedList> */}
            </HStack>
        </Box>
    );
}

export default Navbar;