import styled from "styled-components";

import Header from "../../components/organisms/header";
import Body from "../../components/organisms/body";
import Span from "../../components/atoms/span";
import TagList from "../../components/molecules/tag_list";
import Profile from "../../components/molecules/profile";
import Heart from "../../components/atoms/heart";
import Notion from "../../components/atoms/notion";
import Review from "../../components/organisms/review";

import profile_default from '../../assets/svg/profile-default.svg';

const StyledHeaderFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
`;

export default function index() {
    return (
        <>
            <Header className='project-info-header' bgImg={""} >
                <Span size={'span-xlarge'} color={'span-color4'}>토이 프로젝트도 사용자의 목소리가 필요해요! Toyice!</Span>
                <StyledHeaderFooter>
                    <TagList tags={['아이디어', '기타']}/>
                    <Profile src={profile_default} w={35} h={35} s={'span-small'} c={'span-color4'}>수빈</Profile>
                </StyledHeaderFooter>
            </Header> 
            <Body className='project-info-body'>
                <Heart />
                <Notion />
                <div className='project-info-body-review'>
                    <Span size={'span-large'} color={'span-color1'}>Review</Span>
                    <Review />
                </div>
            </Body>
        </>
    );
}