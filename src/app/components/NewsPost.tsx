import { styled } from "styled-components";
import { colors } from "../StyleConstants";


const PostConteiner = styled.div`
    min-width: calc((1062.5px - 148px) / 3);
    height: 101px;
    display: flex; 
    flex-direction: column;
`

const H4 = styled.h4`
    color: black;
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 9.59px;
`

const P = styled.p`
    color: ${colors.regular_text};
    font-size: 16px;
`

const NewsPost = () => {
    return (
        <PostConteiner>
            <H4>Title</H4>
            <P>Lorem ipsum dolor sit amet, consectetur </P>
            <P>adipiscing elit. Aliquam mattis, leo et </P>
            <P>condimentum</P>
        </PostConteiner>
    );
}

export default NewsPost;