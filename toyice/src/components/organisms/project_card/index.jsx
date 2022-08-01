import { useState, useMemo, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { getApi } from '../../../state';
import { projectType } from '../../../pages/project_main/templates';

import Img from '../../atoms/img';
import Span from '../../atoms/span';
import TagList from '../../molecules/tag_list';
import CardFooter from '../../molecules/card_footer';

const StyledCard = styled.div`
    width: 420px;
    height: 400px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    cursor: pointer;
`;

const StyledInsideCard = styled.div`
    display: grid;
    grid-template-rows: 34px 51px 57px 25px;
    margin-top: 17.5px;
    margin-right: 0px;
    padding: 0 26px 0 26px;
`;

const ProjectCard = () => {
    const [cards, setCards] = useState([]);
    const type = useRecoilValue(projectType);

    useMemo(() => {
        getApi(`/toy/list${ type && '?type=' + type }`).then( res => setCards(res) );
    }, [type])

    return (
        <>
        {cards.map( card =>
        <StyledCard onClick={ () => window.location.assign('/toy/1') } >
            <Img src={card.mainImage} width={'100%'} height={200} className='card-img' />
            <StyledInsideCard>
                <div>
                    <Span size='span-small' color='span-color1'>{card.title}</Span>
                </div>
                <div>
                    <Span size='span-xsmall' color='span-color3'>{card.description}</Span>
                </div>
                <TagList tags={[card.type].concat(card.tagList)} />
                <CardFooter view={card.views} like={card.likes}/>
            </StyledInsideCard>
        </StyledCard>)}
        </>
    );
}

export default ProjectCard;