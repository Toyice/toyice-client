import { useLocation } from 'react-router-dom';
import { useState, useMemo } from 'react';
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getApi } from '../../state';
import { toyId } from '../../App';

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

export default function Index() {
    const [info, setInfo] = useState();
    const { state } = useLocation();
    const id = useRecoilValue(toyId);
    const setId = useSetRecoilState(toyId);

    useMemo(() => {
        if(state !== null) {
            getApi(`/toy/${state.id}`).then( res => setInfo(res) );
            console.log(info)
        }
        console.log(id, state.id)
        setId(state.id)
    }, [state])

    return (
        <>
        {info &&
        <>
            <Header className='project-info-header' bgImg={info.mainImage} >
                <Span size={'span-xlarge'} color={'span-color4'}>{info.title}</Span>
                <StyledHeaderFooter>
                    <TagList tags={[info.type].concat(info.tagList)}/>
                    <Profile src={profile_default} w={35} h={35} s={'span-small'} c={'span-color4'}>수빈</Profile>
                </StyledHeaderFooter>
            </Header> 
            <Body className='project-info-body'>
                <Heart isLike={info.likes} />
                <Notion data={info.notionUrl}/>
                <div className='project-info-body-review'>
                    <Span size={'span-large'} color={'span-color1'}>Review</Span>
                    <Review data={info.reviewList} id={state.id} />
                </div>
            </Body>
        </>
        }
        </>
    );
}