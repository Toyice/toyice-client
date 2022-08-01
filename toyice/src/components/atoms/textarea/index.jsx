import { useCallback } from 'react';

import './style.css';

const TextArea = (props) => {

    return (
        <textarea className={props.className}></textarea>
    );
}

export default TextArea;