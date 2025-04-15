import { Button } from "@mui/material";
import { styled } from "styled-components";
import { colors } from "../StyleConstants";


const StyledContactButton = styled(Button)`
    background-color: ${colors.button_bg};
    color: ${colors.button_text};
    width: 100%;
    height: 31px;
    font-size: 14px;
    font-weight: regular;
    text-transform: none;
`

const StyledNav = styled.nav`
    width: 100%;
    display: flex;  
`
const ContactButton = () => {
  return (
    <>
        <StyledNav>
            <StyledContactButton  href="/contact">Contact us</StyledContactButton>
        </StyledNav>
    </>
  );
}

export default ContactButton;
