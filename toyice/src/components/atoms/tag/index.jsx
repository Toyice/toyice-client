import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import './style.css';

const StyledTag = styled.div`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 15px;
        border-radius: 60px;
        margin-right: 10px;
        white-space: nowrap;
        padding: 0 13px 0 13px;
    `;

const tag = (props) => {
    const { children, color, bgcolor, className, onClick } = props;
    const class_props = classnames(color, bgcolor, className);

    return (
        <StyledTag className={class_props} onClick={onClick && onClick} style={{ height: props.h ? props.h : '32px' }}>{children}</StyledTag>
    );
}

export default tag;