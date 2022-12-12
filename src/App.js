import styled from "styled-components";
import { Box } from "@mui/material";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./Page/Home";

const App = () => {
  return (
    <StyledComponent>
      <Header />
      <Home />
      <Footer />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export default App;
