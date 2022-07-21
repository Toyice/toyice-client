import React, { useMemo } from 'react';
import classnames from 'classnames';

import './style.css';

export const btn_type = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
}

export const btn_size = {
    NONE: 'none',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

export const btn_theme = {
    TEXT_POINT: 'text-point',
    TEXT: 'text',
    POINT: 'point',
    REVIEW: 'review',
}

const Button = ( props ) => {
    const { type, onClick, children, size, theme, className, disabled } = props;
    const class_props = classnames(type || btn_type.BUTTON, size, theme, className);

    return (
        <button type={btn_type.BUTTON} onClick={onClick} disabled={disabled} className={class_props}>
            {children}
        </button>
    );
}

export default Button;