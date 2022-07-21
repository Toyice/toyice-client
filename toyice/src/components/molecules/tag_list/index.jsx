import { useState } from 'react';

import Tag from '../../atoms/tag';

const TagList = () => {
    const [tags, setTags] = useState(['기획']);

    return (
        <div>
            {tags.map( tag => 
                <Tag color='tag-color1' bgcolor='tag-orange'>기획</Tag>
            )}
        </div>
    );
}

export default TagList;