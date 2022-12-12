import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

const CartVault = ({ each }) => {
  return (
    <StyledComponent>
      <BoxCoins01>
        <CoinLeft01>
          <ImageCoin01>
            <img src={each.imgLeftCoin} width={"100%"} height={"100%"} alt="" />
          </ImageCoin01>
          <TextCoin01>{each.textLeftCoin}</TextCoin01>
        </CoinLeft01>
        <CoinRight01>
          <ImageCoin01>
            <img
              src={each.imgRightCoin}
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </ImageCoin01>
          <TextCoin01>{each.textRightCoin}</TextCoin01>
        </CoinRight01>
      </BoxCoins01>
      <TextName01>APY</TextName01>
      <TextValu01>{each.apy}</TextValu01>
      <TextName01>Daily</TextName01>
      <TextValu01 marginBottom={"15px"}>{each.daily}</TextValu01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 16px;
  box-sizing: border-box;
  background: #ffffff;
  /* Shadow-3 */
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 5, 1);
  }
`;

const BoxCoins01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background: #121212;
  align-items: center;
  padding: 10px 15px;
  box-sizing: border-box;
  align-items: center;
`;

const CoinLeft01 = styled(Box)`
  display: flex;
  align-items: center;
  border-right: 1px solid #ffffff;
  padding-right: 10px;
  margin-right: 10px;
`;

const CoinRight01 = styled(Box)`
  display: flex;
  align-items: center;
`;

const ImageCoin01 = styled(Box)`
  display: flex;
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

const TextCoin01 = styled(Box)`
  display: flex;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  /* White */

  color: #ffffff;
`;

const TextName01 = styled(Box)`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  /* Black/600 */

  color: #605f5f;
  margin-top: 30px;
`;

const TextValu01 = styled(Box)`
  display: flex;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  /* identical to box height, or 127% */

  letter-spacing: 2px;
  font-feature-settings: "pnum" on, "lnum" on;

  /* Black/900 */

  color: #121212;
  margin-top: 10px;
`;

export default CartVault;
