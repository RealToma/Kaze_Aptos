import styled from "styled-components";
import { Box } from "@mui/material";
import { MdArrowRightAlt } from "react-icons/md";
import imgNFT01 from "../Asset/Image/Home/NFT-1.png";
import imgNFT02 from "../Asset/Image/Home/NFT-2.png";
import imgNFT03 from "../Asset/Image/Home/NFT-3.png";
import imgNFT04 from "../Asset/Image/Home/NFT-1.png";

const Home = () => {
  return (
    <StyledComponent>
      <BackCircle01></BackCircle01>
      <BackCircle02></BackCircle02>
      <BackCircle03></BackCircle03>
      <BoxIntroduction01>
        <TextIntroduction01>
          Discover Digital Art & Collect NFT
        </TextIntroduction01>
        <TextIntroDescription01>
          Earn the highest APY’s across 18 chains with safety and effiency in
          mind.
        </TextIntroDescription01>
        <ButtonIntroGroup01>
          <ButtonExplore01>
            <Box display={"flex"} mr={"5px"}>
              Explore
            </Box>
            <Box display={"flex"} fontSize={"1.5rem"}>
              <MdArrowRightAlt />
            </Box>
          </ButtonExplore01>
          <ButtonJoin01>Join Now</ButtonJoin01>
        </ButtonIntroGroup01>
        <BoxIntroNFTGroup01>
          <IntroEachNFT01>
            <img src={imgNFT01} width={"100%"} height={"100%"} alt="" />
          </IntroEachNFT01>
          <IntroEachNFT01>
            <img src={imgNFT02} width={"100%"} height={"100%"} alt="" />
          </IntroEachNFT01>
          <IntroEachNFT01>
            <img src={imgNFT03} width={"100%"} height={"100%"} alt="" />
          </IntroEachNFT01>
          <IntroEachNFT01>
            <img src={imgNFT04} width={"100%"} height={"100%"} alt="" />
          </IntroEachNFT01>
        </BoxIntroNFTGroup01>
      </BoxIntroduction01>
      <Boxstatistics01>
        <MaxStatistics01></MaxStatistics01>
      </Boxstatistics01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BackCircle01 = styled(Box)`
  display: flex;
  position: absolute;
  width: 100px;
  height: 100px;
  background: #ffefba;
  filter: blur(200px);
  left: 100px;
  top: 0px;
`;

const BackCircle02 = styled(Box)`
  display: flex;
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(240, 135, 114, 0.6);
  filter: blur(200px);
  right: 100px;
  top: 0px;
`;

const BackCircle03 = styled(Box)`
  display: flex;
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(175, 131, 248, 0.7);
  filter: blur(200px);
  left: 50%;
  transform: translateX(-50%);
  top: 500px;
`;

const BoxIntroduction01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 0px 100px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  z-index: 10;
`;

const TextIntroduction01 = styled(Box)`
  display: flex;
  width: 850px;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 90px;
  /* or 112% */

  text-align: center;

  /* Black/900 */

  color: #121212;
`;

const TextIntroDescription01 = styled(Box)`
  display: flex;
  width: 600px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  text-align: center;

  /* Black/800 */

  color: #212121;
  margin-top: 25px;
`;

const ButtonIntroGroup01 = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const ButtonExplore01 = styled(Box)`
  display: flex;
  width: 155px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #212121;
  border-radius: 39px;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  /* White */

  color: #ffffff;
  border: 2px solid #212121;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 5px #ffffff;
  }
`;

const ButtonJoin01 = styled(Box)`
  display: flex;
  width: 155px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 39px;
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  text-align: center;
  /* Black/800 */
  color: #212121;
  border: 2px solid #212121;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 5px #212121;
  }
`;

const BoxIntroNFTGroup01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`;

const IntroEachNFT01 = styled(Box)`
  display: flex;
  background: url(shubham-dhage-26PeYRqpBh8-unsplash.jpg);
  filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.08));
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.6));
  }
`;

const Boxstatistics01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 84px;
  background-color: #121212;
  z-index: 20;
  margin-top: 30px;
`;

const MaxStatistics01 = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 100px;
  box-sizing: border-box;
`;

export default Home;
