import React from 'react';
import styled from 'styled-components';

import Img from '../../atoms/img';
import Span from '../../atoms/span';

import good from '../../../assets/svg/good.svg';
import profile_default from '../../../assets/svg/profile-default.svg';

const StyledCardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledCardFooter_profile = styled.div`
    display: grid;
    grid-template-columns: 32px auto;
    place-items: center;
`;

const StyledCardFooter_emoticon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 92px;
`;

const CardFooter = () => {
    return (
        <StyledCardFooter>
            <StyledCardFooter_profile>
                <Img src={profile_default} width={27} height={25}/>
                <Span size='span-xsmall' color='span-color3'>수빈</Span>
            </StyledCardFooter_profile>
            <StyledCardFooter_emoticon>
                <Span>😮</Span>
                <Span size='span-xsmall' color='span-color3'>22</Span>
                <Img src={good} />
                <Span size='span-xsmall' color='span-color3'>40</Span>
            </StyledCardFooter_emoticon>
        </StyledCardFooter>
    );
}   

export default CardFooter;