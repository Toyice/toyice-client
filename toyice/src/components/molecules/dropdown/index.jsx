import classnames from 'classnames';
import { BiCaretDown } from 'react-icons/bi';

import './style.css';

const Dropdown = (props) => {
    const class_props = classnames('dropdown', props.className);

    return (
        <div className={class_props} onClick={props.onClick}>
            <div className='dropdown-text'>
                {props.children}
                <div>
                    <BiCaretDown />
                </div>
            </div>
        </div>
    );
}

export default Dropdown;