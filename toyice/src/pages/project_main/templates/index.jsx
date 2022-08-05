import { RecoilRoot, atom } from 'recoil';

import Header from '../../../components/organisms/header';
import Body from '../../../components/organisms/body';
import Img_stone from '../../../components/molecules/img_stone';
import Button from '../../../components/atoms/button';
import Card from '../../../components/organisms/project_card';

export const projectType = atom({ key: 'projectType', default: ''});

export default function index() {
    return (
        <RecoilRoot>
            <Header className='project-main-header'>
                <Img_stone />
                <Button size={'button-large'} theme={'button-point'} className='main-header-btn' onClick={ () => window.location.assign('/create-toy') }>나의 Toy 자랑하기</Button>
            </Header> 
            <Body className='project-main-body'>
                <Card />
            </Body>
        </RecoilRoot>
    );
}