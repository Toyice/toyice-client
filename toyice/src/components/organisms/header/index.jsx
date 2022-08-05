import React from 'react';
import './style.css';

const header = (props) => {
    return (
        <div className={props.className} style={ props.bgImg ? { backgroundImage: `URL(${props.bgImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' } : null}>
            {props.children}
        </div>
    );
}

export default header;