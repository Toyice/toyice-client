import { useState, useEffect } from 'react';
import styled from 'styled-components';

import inactive from '../../../assets/svg/good-btn.svg';
import active from '../../../assets/svg/good-btn-active.svg';

const StyledHeart = styled.div`
    float: right;
    padding-right: 8px;
    cursor: pointer;
`;

const Heart = () => {
    const [isGood, setIsGood] = useState(0);

    return (
        <StyledHeart onClick={ () => isGood ? setIsGood(0) : setIsGood(1) }>
            {isGood ? <img src={active} /> : <img src={inactive} />}
        </StyledHeart>
    );
}

export default Heart;