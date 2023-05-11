import './Button.css';

function Button(prop) {
    return(
        <div className='button'>
            <button className='reset-button'>{prop.title}</button>
        </div>
    );
}

export default Button;