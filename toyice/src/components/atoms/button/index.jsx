import React, { useMemo } from 'react';
import classnames from 'classnames';

import './style.css';

export const btn_type = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
}

export const btn_size = {
    NONE: 'button-none',
    SMALL: 'button-small',
    MEDIUM: 'button-medium',
    LARGE: 'button-large',
}

export const btn_theme = {
    TEXT_POINT: 'button-text-point',
    TEXT: 'button-text',
    POINT: 'button-point',
    REVIEW: 'button-review',
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