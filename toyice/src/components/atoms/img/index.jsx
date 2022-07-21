import React from 'react';

import './style.css';

const img = (props) => {
    const { src, height, width, className} = props;
    
    return (
        <img src={src} height={height} width={width} className={className} />
    );
}

export default img;