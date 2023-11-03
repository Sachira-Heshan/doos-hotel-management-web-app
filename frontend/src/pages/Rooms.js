import React from "react";

import { Box } from "@chakra-ui/react";

import { BsFillCaretRightFill } from "react-icons/bs";
import "./Style.css";

const Rooms = () => {
  return (
    <Box minW={"100%"} centerContent>
      <Box maxW={"1300px"} mx={"auto"}>
        <div className="main-title">
          <h3>Rooms</h3>
        </div>

        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h3>Create New Room</h3>
              <BsFillCaretRightFill className="card_icon" />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Rooms;
