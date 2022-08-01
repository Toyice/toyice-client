import styled from 'styled-components';

import AddTitle from '../add_title';
import Tagging from '../tagging';

const StyledAddTag = styled.div`

`;

const AddTag = () => {
    return (
        <div>
            <AddTitle bigTitle={'추가 태그'} smallTitle={'프로젝트 카드에 노출되는 태그를 자유롭게 입력해주세요.(최대 2개)'} />
            <Tagging />
        </div>
    );
}

export default AddTag;