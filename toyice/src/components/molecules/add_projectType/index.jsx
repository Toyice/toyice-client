import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { type } from '../../../pages/project_add';

import AddTitle from "../add_title";
import Selectbox from "../selectbox";

const AddProjectType = () => {
    const [toyType, setToyType] = useRecoilState(type);
    
    return (
        <div>
            <AddTitle isDot={true} bigTitle={'토이 프로젝트 유형'} smallTitle={'프로젝트의 유형을 선택해주세요.'} />
            <Selectbox 
                className='add-toy-selectbox' 
                placeholder={'태그를 선택해주세요.'} 
                btnList={['아이디어', '디자인', '서비스 개발']}
                onClick={ ({ target }) => setToyType(target.innerText) }
            />
        </div>
    );
}

export default AddProjectType;