import styled from "styled-components";
import { Box } from "@mui/material";
import { MdArrowRightAlt } from "react-icons/md";

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
        </MaxSubscribe01>
      </BoxSubscribe01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
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

export default Footer;
