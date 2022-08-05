import { useRef, useEffect } from 'react';
import { BiCaretUp } from 'react-icons/bi';

import './style.css';

const DropContents = (props) => {
    const { upRef, contentsList, className, isDrop, setIsDrop } = props;
    const dropRef = useRef();

    const closeHandler = ({ target }) => {
        console.log(!upRef.current.contains(target), target, upRef)
        if( !upRef.current.contains(target) && !dropRef.current.contains(target) ) setIsDrop(false);
    }

    useEffect(() => {
        
        window.addEventListener('click', closeHandler);
        return () => {
            window.removeEventListener('click', closeHandler);
        };
    }, [isDrop])
    
    return (
        <div className={className} ref={dropRef} hidden={isDrop ? false : true}>
            <div id='dropContents-icon'>
                <BiCaretUp color='#C2C2C2' size='17px'/>
            </div>
            {contentsList.map( (content, key) => 
                <div key={key} id={'dropContents-' + key}>{content}</div>
            )}
        </div>
    );
}

export default DropContents;