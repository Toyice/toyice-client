import React from 'react';
import styled from 'styled-components';

import Button_list from '../../molecules/button_list/index';
import Img from '../../atoms/img';

import logo from '../../../assets/svg/logo.svg';
import profile_default from '../../../assets/svg/profile-default.svg';

const StyledGNB = styled.div`
    width: auto;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FEFEFE;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
    padding: 10px 340px;
`;

const GNB = () => {
    return (
        <StyledGNB>
            <Button_list className='GNB-btn-list' data={[<img src={logo} />, '프로젝트', 'Toys 프로필', 'About Toyice']} />
            <Img className='GNB-profile' src={profile_default} height={38} width={38} />
        </StyledGNB>
    );
}

export default GNB;