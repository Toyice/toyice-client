import { useState } from 'react';
import styled from 'styled-components';

import Img from '../../atoms/img';
import Span from '../../atoms/span';
import TagList from '../../molecules/tag_list';
import CardFooter from '../../molecules/card_footer';

const StyledCard = styled.div`
    width: 370px;
    height: 400px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
`;

const StyledDefaultImg = styled.div`
    background: #B1B1B1;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
    width: 370px;
    height: 200px;
    border-radius: 25px 25px 0 0;
`;

const StyledInsideCard = styled.div`
    display: grid;
    width: 320px;
    grid-template-rows: 34px 51px 57px 25px;
    margin-top: 17.5px;
    margin-left: 25px;
`;

const ProjectCard = () => {
    const [img, setImg] = useState("");

    return (
        <StyledCard>
            {img !== "" ? <Img src={img} /> : <StyledDefaultImg />}
            <StyledInsideCard>
                <div>
                    <Span size='span-small' color='span-color1'>우아한 형제들 PM이 어떻게 일하냐면요-</Span>
                </div>
                <div>
                    <Span size='span-xsmall' color='span-color3'>우아한 형제들 PM들이 일하는 방식을 한 번에 담아놓은 웹서비스. 우아한 형제들 PM들이 일하는 방...</Span>
                </div>
                <TagList />
                <CardFooter />
            </StyledInsideCard>
        </StyledCard>
    );
}

export default ProjectCard;