import styled from "styled-components";
import { Box } from "@mui/material";
import { MdArrowRightAlt } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
import {
  TbBrandTwitter,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTelegram,
} from "react-icons/tb";

const Footer = () => {
  return (
    <StyledComponent>
      <BoxSubscribe01>
        <MaxSubscribe01>
          <TextSubscribe01>Subscribe to our Newsletter</TextSubscribe01>
          <BoxInputEmail01>
            <InputEmail01
              component={"input"}
              type={"text"}
              placeholder={"Your email"}
            ></InputEmail01>
            <ButtonEmailSend01>
              <MdArrowRightAlt />
            </ButtonEmailSend01>
          </BoxInputEmail01>
          <BoxSocialLink01>
            <LinkEachButton01>
              <TbBrandTwitter />
            </LinkEachButton01>
            <LinkEachButton01>
              <RxDiscordLogo />
            </LinkEachButton01>
            <LinkEachButton01>
              <TbBrandFacebook />
            </LinkEachButton01>
            <LinkEachButton01>
              <TbBrandInstagram />
            </LinkEachButton01>
            <LinkEachButton01>
              <TbBrandTelegram />
            </LinkEachButton01>
          </BoxSocialLink01>
        </MaxSubscribe01>
      </BoxSubscribe01>
      <BoxContent01>
        <MaxContent01>
          <TextBig01>KAZE</TextBig01>
          <TextSmall01>By NFT People, for NFT People</TextSmall01>
        </MaxContent01>
      </BoxContent01>
      <BoxBottom01>
        <MaxBottom01>
          <LinkEachText01>Copyright 2022. Kaze</LinkEachText01>
          <LinkEachText01>About</LinkEachText01>
          <LinkEachText01>API</LinkEachText01>
          <LinkEachText01>Help</LinkEachText01>
          <LinkEachText01>Privacy Policy</LinkEachText01>
          <LinkEachText01>Terms of Conditions</LinkEachText01>
        </MaxBottom01>
      </BoxBottom01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 99;
`;

const BoxSubscribe01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #121212;
  height: 84px;
`;

const MaxSubscribe01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const TextSubscribe01 = styled(Box)`
  display: flex;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  /* identical to box height, or 127% */

  /* White */

  color: #ffffff;
`;

const BoxInputEmail01 = styled(Box)`
  display: flex;
  align-items: center;
  width: 312px;
  height: 52px;
  border-radius: 50px;
  background: #ffffff;
  padding: 0px 10px 0px 30px;
  box-sizing: border-box;
`;
const InputEmail01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  margin-right: 5px;
  outline: none;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 157% */

  /* Black/500 */

  color: #807e7e;
`;

const ButtonEmailSend01 = styled(Box)`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #212121;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
`;

const BoxSocialLink01 = styled(Box)`
  display: flex;
  align-items: center;
`;

const LinkEachButton01 = styled(Box)`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #212121;
    border-radius: 80px;
  }
`;

const BoxContent01 = styled(Box)`
  display: flex;
  width: 100%;
  background: #212121;
  justify-content: center;
`;

const MaxContent01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  align-items: center;
`;

const TextBig01 = styled(Box)`
  display: flex;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 52px;
  /* identical to box height, or 130% */

  /* White */

  color: #ffffff;
  margin-top: 65px;
`;

const TextSmall01 = styled(Box)`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  /* White */

  color: #ffffff;
  margin-top: 15px;
  margin-bottom: 65px;
`;

const BoxBottom01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 90px;
  border-top: 1px solid #605f5f;
  background: #212121;
  justify-content: center;
  align-items: center;
`;

const MaxBottom01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const LinkEachText01 = styled(Box)`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  /* Black/400 */

  color: #c4c4c4;
  margin-left: 40px;
  margin-right: 40px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: white;
    text-shadow: 0px 0px 10px white;
  }
`;

export default Footer;
