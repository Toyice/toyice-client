import { useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

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
    const [tags, setTags] = useState([]);

    return (
        <StyledTagging>
            <TagList className='tagging-tag' tags={tags} icon={<FiX stroke-width={2.5} size={16}/>} h={40}/>
            {tags.length < 2 && 
            <Input value={tag} setValue={setTag} setResult={setTags} placeholder={'태그를 입력해주세요.'} className='tagging-input' maxlength={5}/> }
        </StyledTagging>
    );
}

export default Tagging;