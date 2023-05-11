import './InputText.css';
import dollarIcon from '../images/icon-dollar.svg';
import userIcon from '../images/icon-person.svg';

function InputText(props) {
    return (
        <div className='input'>
            { props.title ? <span className='title'>{props.title}</span> : ''}
            <input type='number' className={ props.class ? props.class + ' input-type' : 'input-type' } placeholder={props.placeholderText ? props.placeholderText : '0'} value={props.value} onChange={e => props.valueChange(props.type, e.target.value)} />
            { props.isShowIcon ? <img className='input-icon' src={props.icon === 'dollarIcon' ? dollarIcon : userIcon } /> : ''}
        </div>
    );
}

export default InputText;