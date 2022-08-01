import './style.css';

const Label = (props) => {
    return (
        <label for={props.for}>{props.children}</label>
    );
}

export default Label;