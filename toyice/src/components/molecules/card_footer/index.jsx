import React from 'react';
import styled from 'styled-components';

import Img from '../../atoms/img';
import Span from '../../atoms/span';
import Profile from '../profile';

import good from '../../../assets/svg/good.svg';
import profile_default from '../../../assets/svg/profile-default.svg';

const StyledCardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledCardFooter_emoticon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 92px;
`;

const CardFooter = (props) => {
    return (
        <StyledCardFooter>
            <Profile src={profile_default} w={27} h={25} s={'span-xsmall'} c={'span-color3'}>수빈</Profile>
            <StyledCardFooter_emoticon>
                <Span>😮</Span>
                <Span size='span-xsmall' color='span-color3'>{props.view}</Span>
                <Img src={good} />
                <Span size='span-xsmall' color='span-color3'>{props.like}</Span>
            </StyledCardFooter_emoticon>
        </StyledCardFooter>
    );
}   

export default CardFooter;