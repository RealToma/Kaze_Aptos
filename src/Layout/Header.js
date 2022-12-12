import styled from "styled-components";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <StyledComponent>
      <BoxLogo01>Kaze</BoxLogo01>
      <BoxLink01>
        <Link01>Explore</Link01>
        <Link01>Stars</Link01>
        <Link01>Resources</Link01>
        <Link01>Create</Link01>
      </BoxLink01>
      <BoxSign01>
        <ButtonLogin>Log in</ButtonLogin>
        <ButtonSignup>Sign up</ButtonSignup>
      </BoxSign01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  padding: 15px 100px;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 100;
`;

const BoxLogo01 = styled(Box)`
  display: flex;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 52px;
  /* identical to box height, or 130% */

  /* Black/900 */

  color: #121212;
  cursor: pointer;
`;

const BoxLink01 = styled(Box)`
  display: flex;
  align-items: center;
`;

const Link01 = styled(Box)`
  display: flex;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  /* Black/900 */
  color: #121212;
  margin-left: 15px;
  margin-right: 15px;

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    /* transform: scale(1.2); */
    text-shadow: 0px 0px 5px #121212;
  }
`;

const BoxSign01 = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonLogin = styled(Box)`
  display: flex;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  /* Black/900 */
  color: #121212;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 5px #121212;
  }
  margin-right: 30px;
`;

const ButtonSignup = styled(Box)`
  display: flex;
  width: 105px;
  height: 45px;
  background: #121212;
  border-radius: 39px;
  justify-content: center;
  align-items: center;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  text-align: center;
  /* White */
  color: #ffffff;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 5px #ffffff;
  }
`;


export default Header;
