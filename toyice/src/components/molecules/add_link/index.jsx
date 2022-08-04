import { useRecoilState } from 'recoil';

import { notionUrl } from '../../../pages/project_add';

import AddTitle from '../add_title';
import Input from "../../atoms/input";
import { useEffect } from 'react';

const AddLink = () => {
    const [url, setUrl] = useRecoilState(notionUrl);

    return (
        <div>
            <AddTitle isDot={true} bigTitle={'링크'} smallTitle={'프로젝트에 대한 정보를 정성스럽게 담은 노션 URL을 입력해주세요.'} />
            <div>
                <Input className={url === "" ? 'add-toy-input' : 'add-toy-input add-toy-active'} placeholder='URL을 첨부해주세요.' onChange={ ({ target }) => setUrl(target.value) } />
            </div>
        </div>
    );
}

export default AddLink;