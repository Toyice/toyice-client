import { useState } from 'react';

import Header from '../../../components/organisms/header';
import Body from '../../../components/organisms/body';
import Img_stone from '../../../components/molecules/img_stone';
import Button from '../../../components/atoms/button';
import Card from '../../../components/organisms/project_card';

export default function index() {
    return (
        <>
            <Header className='project-main-header'>
                <Img_stone />
                <Button size={'button-large'} theme={'button-point'} className='main-header-btn'>나의 Toy 자랑하기</Button>
            </Header> 
            <Body className='project-main-body'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Body>
        </>
    );
}