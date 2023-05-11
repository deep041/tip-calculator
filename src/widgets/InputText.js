import './InputText.css';
import dollarIcon from '../images/icon-dollar.svg';
import userIcon from '../images/icon-person.svg';

function InputText(props) {
    console.log(props.isShowError, props.value)
    return (
        <div className='input'>
            { props.title ? <span className='title'>{props.title}</span> : ''}
            { (props.isShowError && props.value === '0') ? <span className='error'>Cant't be zero</span> : ''}
            <input type='number' className={ props.class ? props.class + ' input-type' : ((props.isShowError && props.value === '0')) ? 'input-error input-type' : 'input-type' } placeholder={props.placeholderText ? props.placeholderText : '0'} value={props.value} onChange={e => props.valueChange(props.type, e.target.value)} />
            { props.isShowIcon ? <img className='input-icon' src={props.icon === 'dollarIcon' ? dollarIcon : userIcon } /> : ''}
        </div>
    );
}

export default InputText;