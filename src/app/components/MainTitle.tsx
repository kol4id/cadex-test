import { styled } from "styled-components";
import { colors } from "../StyleConstants";
import YouTubeVideo from "./YouTubeVideo";


const H1 = styled.h1`
    color: ${colors.main_text};
    font-size: 48px;
    font-weight: bold;
    font-style: italic;
`
const MainArticle = styled.article`
    background-color: ${colors.main_title_bg};
    display: flex;
    flex-direction: row;
    min-height: 351px;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
        // align-items: center;
        // justify-content: center;
    }

`

const MainTitleSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 46px;
    margin-right: 46px;
    margin-top: 26.46px;
    width: fit-content;

    @media (max-width: 620px) {
        margin-left: 12px;
    }
`  

const YouTubeVideoContainer = styled.section`
    display: flex;  
    margin-top: 28px;
    margin-left: auto;
    margin-right: 33px;

    @media (max-width: 900px) {
        margin-left: 46px;
    }

    @media (max-width: 620px) {
        margin-left: 12px;
        margin-right: 10px;
    }
` 

const MainTitle = () => {
    return (
    <main>
        <MainArticle>
            <MainTitleSection>
                <section>
                    <H1>Most important</H1>
                    <H1>title on the page</H1>
                </section>
                <section style={{ marginTop: "24.36px"}}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p>Aliquam mattis, leo et condimentum ultricies, sem urna </p>
                    <p>convallis metus, vel suscipit nibh lacus tincidunt ante</p>
                </section>
            </MainTitleSection>    
            <YouTubeVideoContainer>
                <YouTubeVideo url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" />
            </YouTubeVideoContainer>
        </MainArticle>
      </main>
    );
}

export default MainTitle;