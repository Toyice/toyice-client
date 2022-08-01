import styled from "styled-components";

import Img from "../../atoms/img";
import Span from "../../atoms/span";

const StyledProfile = styled.div`
    display: grid;
    grid-template-columns: 32px auto;
    column-gap: 5px;
    place-items: center;
`;

const Profile = (props) => {
    return (
        <StyledProfile>
            <Img src={props.src} width={props.w} height={props.h}/>
            <Span size={props.s} color={props.c}>{props.children}</Span>
        </StyledProfile>
    );
}

export default Profile;