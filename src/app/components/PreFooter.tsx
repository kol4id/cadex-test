import { styled } from "styled-components";
import ContactButton from "./ContactButton";


const H4 = styled.h4`
    font-size: 48px;
    font-weight: bold;
    font-style: italic;
    margin-top: 70px;

    @media (max-width: 900px) {
        margin-left: 20px;
    }
    
`

const PreFooterSection = styled.section`
    min-height: 275px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PreFooter = () => {
  return (
    <>
        <PreFooterSection>
            <H4>Less important title</H4>
            <section style={{width: '174px', marginTop: '40px'}}>
                <ContactButton/>
            </section>
        </PreFooterSection>        
    </>
  );
}

export default PreFooter;