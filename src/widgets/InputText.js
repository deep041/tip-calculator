import './InputText.css';
import dollarIcon from '../images/icon-dollar.svg';

function InputText(prop) {
    return (
        <div className='input'>
            <span className='title'>{prop.title}</span>
            <input type='number' className='input-type' placeholder='0' />
            <img className='input-icon' src={dollarIcon} />
        </div>
    );
}

export default InputText;