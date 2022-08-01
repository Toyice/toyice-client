import { useState } from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

import Span from '../../atoms/span';
import Img from '../../atoms/img';
import Input from '../../atoms/input';
import TextArea from '../../atoms/textarea';
import Label from '../../atoms/label';

import dot from '../../../assets/svg/dot.svg';

const StyledAddBasicInfo = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
`;

const StyledAddDiscription = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 34px;
    row-gap: 15px;
    margin-top: 40px;
`;

const AddBasicInfo = () => {
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");

    return (
        <div>
            <StyledAddBasicInfo>
                <Img src={dot} className={'basic-info-dot'} />
                <Span color={'span-point'} size={'span-medium'}>기본정보</Span>
                <Span color={'span-color3'} size={'span-xsmall'}>기본정보는 프로젝트 카드에 노출됩니다.</Span>
            </StyledAddBasicInfo>
            <StyledAddDiscription>
                <div style={{ gridColumn: '1/3', gridRow: '1/4', background: '#F0F0F0', borderRadius: '30px'}}>
                    <Label className={'add-toy-label'} htmlFor='file-input'><FiPlus color='#FFFFFF' size='45px'/></Label>
                    <Input type={'file'} className={'add-toy-input'} id={'file-input'}/>
                </div>
                <div style={{ gridColumn: '3/4', gridRow: '1/2'}}>
                    <Input className={'add-toy-input'} value={title} setValue={setTitle} />
                </div>
                <div style={{ gridColumn: '3/4', gridRow: '2/4'}}>
                    <TextArea className={'add-toy-textarea'} value={discription} setValue={setDiscription}/>
                </div>
            </StyledAddDiscription>
        </div>
    );
}

export default AddBasicInfo;