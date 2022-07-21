import React from 'react';

import Button from '../../atoms/button';

import './style.css'

const button_list = (props) => {
    const { data, className } = props;

    return (
        <div className={className}>
        {data.map( (btn_text, i) => btn_text !== '프로젝트' ?
            <Button className={'gnb-btn'} theme={'text'} size={'none'} key={i}>{btn_text}</Button> :
            <Button className={'gnb-btn'} theme={'text-point'} size={'none'} key={i}>{btn_text}</Button>
        )}
        </div>
    );
}

export default button_list;