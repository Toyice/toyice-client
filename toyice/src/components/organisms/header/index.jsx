import React from 'react';
import './style.css';

const header = (props) => {
    return (
        <div className={props.className} style={ props.bgImg ? { backgroundImage: `URL(${props.bgImg})` } : null}>
            {props.children}
        </div>
    );
}

export default header;