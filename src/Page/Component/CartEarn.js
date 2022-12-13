import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

const CartEarn = ({ each }) => {
  return (
    <StyledComponent>
      <BoxShape01>{each.icon}</BoxShape01>
      <TextBig01>{each.name}</TextBig01>
      <TextDescription01>{each.text}</TextDescription01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 24px;
  box-sizing: border-box;
  background: #ffffff;
  /* Shadow-3 */
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #212121;
    box-shadow: 0px 8px 24px rgba(0, 0, 5, 1);
    > div:nth-child(1) {
      color: #212121;
      background: #ffffff;
    }
    > div:nth-child(2) {
      color: white;
    }
    > div:nth-child(3) {
      color: #EAEAEA;
    }
  }
`;

const BoxShape01 = styled(Box)`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: #121212;
  border-radius: 8px;
  color: white;
  font-size: 2rem;
`;

const TextBig01 = styled(Box)`
  display: flex;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  /* identical to box height, or 127% */

  /* Black/900 */

  color: #121212;
  margin-top: 15px;
`;

const TextDescription01 = styled(Box)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  /* Black/600 */

  color: #605f5f;
  margin-bottom: 30px;
`;

export default CartEarn;
