import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { notionUrl } from '../../../pages/project_add';

import AddTitle from '../add_title';
import Input from "../../atoms/input";

const StyledError = styled.div`
    position: absolute;
    color: #EC6536;
    margin-left: 20px;
    margin-top: 5px;
    font-size: 13px;
`;

const AddLink = () => {
    const [url, setUrl] = useRecoilState(notionUrl);

    return (
        <div>
            <AddTitle isDot={true} bigTitle={'링크'} smallTitle={'프로젝트에 대한 정보를 정성스럽게 담은 노션 URL을 입력해주세요.'} />
            <div>
                <Input className={url === "" ? 'add-toy-input' : url.includes("https://") && url.includes("notion.site") ? 'add-toy-input add-toy-active' : 'add-toy-input add-toy-active add-toy-bad'} 
                        placeholder='URL을 첨부해주세요.' 
                        onChange={ ({ target }) => setUrl(target.value) } 
                />
                <StyledError hidden={url === "" || url.includes("https://") && url.includes("notion.site") ? true : false}>{url.includes("notion") ? '공유된 노션 url을 입력해주세요.' : '잘못된 url입니다.'}</StyledError>
            </div>
        </div>
    );
}

export default AddLink;