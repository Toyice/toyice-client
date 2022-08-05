import { useEffect, useRecoilState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

import { tags } from '../../../pages/project_add';

import Input from '../../atoms/input';
import TagList from '../tag_list';

const StyledTagging = styled.div`
    display: flex;
    align-items: center;
    padding-left: 13px;
    width: 609px;
    height: 66px;
    background: #F0F0F0;
    border-radius: 30px;
`;

const Tagging = () => {
    const [tag, setTag] = useState("");
    const [tagList, setTagList] = useState([]);
    const setToyTags = useSetRecoilState(tags);

    useEffect(() => {
        const newTags = tagList;
        setToyTags(newTags);
    }, [tagList])

    return (
        <StyledTagging>
            <TagList className='tagging-tag' tags={tagList} setTags={setTagList} icon={<FiX strokeWidth={2.5} size={16}/>} h={40}/>
            {tagList.length < 2 && 
            <Input value={tag} setValue={setTag} setResult={setTagList} placeholder={'태그를 입력해주세요.'} className='tagging-input add-toy-input' maxLength={5}/> }
        </StyledTagging>
    );
}

export default Tagging;