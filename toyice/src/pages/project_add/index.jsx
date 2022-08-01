import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Span from '../../components/atoms/span';
import Body from '../../components/organisms/body';
import AddBasicInfo from '../../components/molecules/add_basicInfo';
import AddProjectType from '../../components/molecules/add_projectType';
import AddTag from '../../components/molecules/add_tag';
import AddLink from '../../components/molecules/add_link';


export default function index() {
    return (
        <div className='project-add-body'>
        <RecoilRoot>
            <div>
                <Span color={'span-point'} size={'span-large'}>My Toy 등록하기</Span>
            </div>
            <Body>
                <AddBasicInfo />
                <AddProjectType />
                <AddTag />
                <AddLink />
            </Body>
        </RecoilRoot>
        </div>
    );
}