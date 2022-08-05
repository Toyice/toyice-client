import React from 'react';

import Button from '../../atoms/button';

import logo from '../../../assets/svg/logo.svg';
import './style.css'

const button_list = (props) => {
    return (
        <div className={props.className}>
            <Button className={'gnb-btn'} theme={'button-text'} size={'button-none'} onClick={ () => window.location.assign('/') }><img src={logo} /></Button>
            <Button className={'gnb-btn'} theme={'button-text-point'} size={'button-none'} onClick={ () => window.location.assign('/') } >프로젝트</Button>
            <Button className={'gnb-btn'} theme={'button-text'} size={'button-none'}>Toys 프로필</Button>
            <Button className={'gnb-btn'} theme={'button-text'} size={'button-none'}>About Toyice</Button>
        </div>
    );
}

export default button_list;