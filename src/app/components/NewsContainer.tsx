import { styled } from "styled-components";
import { colors } from "../StyleConstants";
import NewsPost from "./NewsPost";
import ContactButton from "./ContactButton";



const NewsArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 656px;
    width: 100%;
`

const NewsTitle = styled.h2`
    color: ${colors.title_text};
    font-size: 48px;
    fonwt-weight: bold;
    font-style: italic;
    margin: 48.5px auto 0px;

    // @media (max-width: 900px) {
    //     margin-left: 20px;
    // }
`

const NewsContainerSection = styled.section`
    display: flex;
    flex-direction: row;
    gap: 74px;
    flex-wrap: wrap;
    max-width: 1062.5px;
    width: 100%;
    height: 100%;
    margin-top: 100.7px;
    margin-left: 22px;

    @media (max-width: 1078px) {
        margin-left: 12%;
    }

    @media (max-width: 900px) {
        margin-left: 20px;
    }
`

const NewsContainer = () => {  
    return (
        <NewsArticle>
            <section style={{display: "flex", marginLeft: '12px'}}>
                <NewsTitle>Also very important title</NewsTitle>
            </section>
            <NewsContainerSection>
                <NewsPost/>
                <NewsPost/>
                <NewsPost/>
                <NewsPost/>
                <NewsPost/>
                <NewsPost/>
            </NewsContainerSection>
            <section style={{marginBottom: '50.18px', marginTop: '68.68px', width: '174px'}}>
                <ContactButton/>
            </section>
        </NewsArticle>
    );
}

export default NewsContainer;