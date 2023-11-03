import React from "react";
import { NavLink } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import './Navbar.css'; // Import the CSS file here

const Navbar = () => {
    return (
        <Box minW={'100%'} minH={'60px'} bg={'#32a852'}>
            <HStack spacing={6} justifyContent={"flex-end"} py={6}>
                <NavLink to={'/dashboard'} className="nav-link">Dashboard</NavLink>
                <NavLink to={'/rooms'} className="nav-link">Rooms</NavLink>
                <NavLink to={'/roomtype'} className="nav-link">Room Type</NavLink>
                <NavLink to={'/reservation'} className="nav-link">Reservation</NavLink>
                <NavLink to={'/'} className="nav-link">Login</NavLink>
            </HStack>
        </Box>
    );
}

export default Navbar;
