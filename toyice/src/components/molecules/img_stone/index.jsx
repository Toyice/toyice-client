import React from 'react';
import styled from 'styled-components';

import Img from '../../atoms/img';

import stone_orange from '../../../assets/svg/stone-orange.svg';
import stone_yellow from '../../../assets/svg/stone-yellow.svg';
import stone_blue from '../../../assets/svg/stone-blue.svg';

const StyledBtnStones = styled.div`
    position: relative;
    width: 287.25px;
    height: 257.13px;
    margin-left: auto;
    margin-right: auto;
`;

const img_stone = () => {
    return (
        <StyledBtnStones>
            <Img src={stone_orange} className='img-stone orange' />
            <Img src={stone_blue} className='img-stone blue' />
            <Img src={stone_yellow} className='img-stone yellow' />
        </StyledBtnStones>
    );
}

export default img_stone;