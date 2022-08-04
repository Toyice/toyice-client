import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { toyId } from '../../../App';

import inactive from '../../../assets/svg/good-btn.svg';
import active from '../../../assets/svg/good-btn-active.svg';

const StyledHeart = styled.div`
    float: right;
    padding-right: 8px;
    cursor: pointer;
`;

const Heart = ({ isLike }) => {
    const [isGood, setIsGood] = useState(0);
    const id = useRecoilValue(toyId);
    
    const likeClickHandler = () => {
        if(isGood) setIsGood(0);
        else setIsGood(1);
        const response = axios.put(`${process.env.REACT_APP_SERVER_HOST}/toy/${id}/like`);
    }

    useEffect(() => {
        
    }, [])

    return (
        <StyledHeart onClick={likeClickHandler}>
            {isGood ? <img src={active} /> : <img src={inactive} />}
        </StyledHeart>
    );
}

export default Heart;