import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

const ButtonEarn = ({ text, index, flagClicked, setFlagClicked }) => {
  return (
    <StyledComponent
      onClick={() => {
        let temp = [];
        console.log(flagClicked);
        for (var i = 0; i < flagClicked?.length; i++) {
          if (i === index) {
            temp.push(true);
          } else {
            temp.push(false);
          }
        }
        console.log(temp);
        setFlagClicked(temp);
      }}
      flagclicked={flagClicked[index] ? true : false}
    >
      {text}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 160px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 39px;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  text-align: center;

  /* Black/600 */
  background: ${({ flagclicked }) =>
    flagclicked === false ? "white" : "#121212"};
  color: ${({ flagclicked }) => (flagclicked === false ? "#605f5f" : "white")};
  border: ${({ flagclicked }) =>
    flagclicked === false ? "2px solid #605f5f" : "2px solid #121212"};
  margin-left: 15px;
  margin-right: 15px;

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${({ flagclicked }) =>
      flagclicked === false ? "#eaeaea" : "#121212"};
    color: ${({ flagclicked }) =>
      flagclicked === false ? "#605f5f" : "white"};
    border: ${({ flagclicked }) =>
      flagclicked === false ? "2px solid #605f5f" : "2px solid #121212"};
  }
`;

export default ButtonEarn;
