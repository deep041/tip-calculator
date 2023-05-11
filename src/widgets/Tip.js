import { useEffect, useState } from 'react';
import InputText from './InputText';
import './Tip.css';

function Tip(props) {

    const [customValue, setCustomValue] = useState('');

    useEffect(() => {
        if (props.reset) {
            setCustomValue('');
        }
    }, [props.reset]);
 
    function changeValue(type, value) {
        setCustomValue(value);
        props.valueChange(type, value);
    }

    function SelectTip(type, value) {
        setCustomValue('');
        props.valueChange(type, value);
    }

    return(
        <div className='tip'>
            <span>{props.title}</span>
            <div className='tip-grid'>
                {props.tips.map((tip, i) => <div key={i} className={ tip === props.value ? 'tip-div selected' : 'tip-div' } onClick={e => SelectTip(props.type, tip)}>  {tip + '%'} </div> )}
                <div className='tip-div input'>
                    <InputText class='custom-number' isShowIcon={false} value={customValue} placeholderText='Custom' type='tip' valueChange={changeValue} />
                </div>
            </div>
        </div>
    )
}

export default Tip;