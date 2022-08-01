import React from 'react';

import './style.css';

const img = (props) => {
    const { src, height, width, className, onClick} = props;
    
    return (
        <img {...props}/>
    );
}

export default img;