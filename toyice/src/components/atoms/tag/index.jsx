import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import './style.css';

const StyledTag = styled.div`
    display: inline-block;
    padding: 8px 11px 8px 11px;
    font-weight: 400;
    font-size: 15px;
    border-radius: 60px;
    margin-right: 10px;
`;

const tag = (props) => {
    const { children, color, bgcolor, className } = props;
    const class_props = classnames(color, bgcolor, className);

    return (
        <StyledTag className={class_props}>{children}</StyledTag>
    );
}

export default tag;