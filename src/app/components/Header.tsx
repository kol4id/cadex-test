import { AppBar } from "@mui/material";
import styled from "styled-components";
import { colors } from "../StyleConstants";
import ContactButton from "./ContactButton";

const HeaderBar = styled(AppBar)`
    background-color: ${colors.header_bg};
    height: 96px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
`
const H3 = styled.h3`
    color: ${colors.title_text};
    font-size: 24px;
    font-weight: bold;
    font-style: italic; 
    margin-left: 25px;
    margin-right: 15px;
`

const ButtonContainer = styled.section`
    display: flex;  
    margin-right: 65px;
    width: 170px;

    @media (max-width: 620px) {
        margin-right: 12px;
        max-width: 120px;
    }
`


const Header = () => {
  return (
    <HeaderBar position="sticky">
        <H3>Some Company</H3>
        <ButtonContainer>
          <ContactButton />
        </ButtonContainer>
    </HeaderBar>
  );
}

export default Header;