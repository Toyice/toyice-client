import { useState, useEffect } from 'react';

import Tag from '../../atoms/tag';

const TagList = (props) => {
    const [tagState, setTagState] = useState("");

    const tagClickHandler = () => {
        const newTags = props.tags.filter( toyTag => toyTag !== tagState );
        props.setTags(newTags);
    }

    useEffect(() => {
        if(props.setTags) {
            tagClickHandler();
            if(props.tags.length === 1) {
                setTagState("");
            }
        }
    }, [tagState])

    return (
        <div>
            {props.tags && props.tags.map( (tag, i) => 
                tag === '아이디어' ? <Tag color='tag-color1' bgcolor='tag-orange' key={i} className={props.className}>{tag}</Tag> :
                tag === '시각화' ? <Tag color='tag-color1' bgcolor='tag-yellow' key={i} className={props.className}>{tag}</Tag> :
                tag === '서비스 개발' ? <Tag color='tag-color1' bgcolor='tag-blue' key={i} className={props.className}>{tag}</Tag> :
                <Tag color='tag-color1' bgcolor='tag-grey' key={i} className={props.className} h={props.h} onClick={ () => setTagState(tag) }>{tag}{props.icon && <span>&nbsp;{props.icon}</span>}</Tag>
            )}
        </div>
    );
}

export default TagList;