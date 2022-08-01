import styled from "styled-components";

import Img from "../../atoms/img";
import Span from "../../atoms/span";
import Input from "../../atoms/input";

import dot from '../../../assets/svg/dot.svg';

const StyledLink = styled.div`
    position: relative;
`;

const AddLink = () => {
    return (
        <StyledLink>
            <Img src={dot} className={'basic-info-dot'}/>
            <Span size={'span-medium'} color={'span-point'}>링크</Span>
            <Span size={'span-xsmall'} color={'span-color3'}>프로젝트에 대한 정보를 정성스럽게 담은 노션 URL을 입력해주세요.</Span>
            <div>
                <Input className={'add-toy-input'}/>
            </div>
        </StyledLink>
    );
}

export default AddLink;