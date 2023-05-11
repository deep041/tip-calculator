import './Button.css';

function Button(props) {
    return(
        <div className='button'>
            <button className='reset-button' disabled={props.isResetDisabled} onClick={props.reset}>{props.title}</button>
        </div>
    );
}

export default Button;