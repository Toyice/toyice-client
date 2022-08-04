import { useRecoilState } from 'recoil';
import { useState } from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

import { mainImage, title, description, toyFormData } from '../../../pages/project_add';

import AddTitle from '../add_title';
import Input from '../../atoms/input';
import TextArea from '../../atoms/textarea';
import Label from '../../atoms/label';

const StyledAddDiscription = styled.div`
    display: grid;
    grid-template-columns: 609px 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 34px;
    row-gap: 15px;
    margin-top: 27px;
    height: 232px;
`;

const StyledAddImg = styled.div`
    grid-column: 1/1;
    grid-row: 1/5;
    background: #F0F0F0;
    border-radius: 30px;
`;

const AddBasicInfo = () => {
    const [toyImg, setToyImg] = useRecoilState(mainImage);
    const [toyTitle, setToyTitle] = useRecoilState(title);
    const [toyDescription, setToyDescription] = useRecoilState(description);
    const [prevImg, setPrevImg] = useState("");
    const [formData, setFormData] = useRecoilState(toyFormData);

    const imgChangeHandler = ({ target }) => {
        const formData = new FormData();
        formData.append('image', target.files[0]);
        setToyImg(target.files[0]);
        // setToyImg(formData);
        setPrevImg(URL.createObjectURL(target.files[0]));
        // setFormData([...formData, {key: 'image', value: target.files[0]}]);
    }

    return (
        <div>
            <AddTitle isDot={true} bigTitle={'기본정보'} smallTitle={'기본정보는 프로젝트 카드에 노출됩니다.'} />
            <StyledAddDiscription>
                <StyledAddImg style={prevImg !== "" ? { backgroundImage: `url(${prevImg})`} : null}>
                    <Input type={'file'} className={'add-toy-input'} id={'file-input'} onChange={imgChangeHandler}>
                        <Label className={'add-toy-label'} htmlFor='file-input'>
                            <FiPlus color='#FFFFFF' size='45px'/>
                        </Label>
                    </Input>
                </StyledAddImg>
                <div style={{ gridColumn: '2/4', gridRow: '1/1'}}>
                    <Input className={toyTitle === "" ? 'add-toy-input' : 'add-toy-input add-toy-active'} onChange={ ({ target }) => setToyTitle(target.value) } placeholder='토이 프로젝트 제목을 입력하세요.'/>
                </div>
                <div style={{ gridColumn: '2/4', gridRow: '2/5'}}>
                    <TextArea className={toyDescription === "" ? 'add-toy-textarea' : 'add-toy-textarea add-toy-active'} onChange={ ({ target }) => setToyDescription(target.value) } placeholder='프로젝트를 한 줄로 요약해 작성해주세요.'/>
                </div>
            </StyledAddDiscription>
        </div>
    );
}

export default AddBasicInfo;