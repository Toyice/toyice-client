import './style.css';

const Label = (props) => {
    const { className, htmlFor } = props;

    return (
        <label {...props} >{props.children}</label>
    );
}

export default Label;