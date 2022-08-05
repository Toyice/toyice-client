import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { projectType } from '../../../pages/project_main/templates';

import Img from '../../atoms/img';

import stone_orange from '../../../assets/svg/stone-orange.svg';
import stone_yellow from '../../../assets/svg/stone-yellow.svg';
import stone_blue from '../../../assets/svg/stone-blue.svg';
import stone_orange_eye from '../../../assets/svg/stone-orange-eye.svg';
import stone_yellow_eye from '../../../assets/svg/stone-yellow-eye.svg';
import stone_blue_eye from '../../../assets/svg/stone-blue-eye.svg';

const StyledBtnStones = styled.div`
    position: relative;
    width: 287.25px;
    height: 257.13px;
    margin-left: auto;
    margin-right: auto;
`;

const ImgStone = () => {
    const [type, setType] = useRecoilState(projectType);

    const stoneClickHandler = (type) => setType(type);

    const img_props = [{src: type === '아이디어' ? stone_orange_eye : stone_orange, className: 'img-stone orange', onClick: () => stoneClickHandler('아이디어')}, 
                        {src: type === '서비스 개발' ? stone_blue_eye : stone_blue, className: 'img-stone blue', onClick: () => stoneClickHandler('서비스 개발')},
                        {src: type === '디자인' ? stone_yellow_eye : stone_yellow, className: 'img-stone yellow', onClick: () => stoneClickHandler('디자인')}]

    return (
        <StyledBtnStones>
        {img_props.map( (img, key) =>
            <Img {...img} key={key} />
        )}
        </StyledBtnStones>
    );
}

export default ImgStone;