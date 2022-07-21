import React from 'react';
import classnames from 'classnames';
import './style.css';

const span = (props) => {
    const { children, size, color, className } = props;
    const class_props = classnames('span', size, color, className);
    return (
        <span className={class_props}>{children}</span>
    );
}

export default span;