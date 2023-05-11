import InputText from './InputText';
import './Tip.css';

function Tip(props) {
    return(
        <div className='tip'>
            <span>{props.title}</span>
            <div className='tip-grid'>
                {props.tips.map((tip, i) => <div className={ tip === props.value ? 'tip-div selected' : 'tip-div' } onClick={e => props.valueChange(props.type, tip)}>  {tip + '%'} </div> )}
                <div className='tip-div input'>
                    {/* <input className='input-number' type='number' />    */}
                    <InputText class='custom-number' isShowIcon={false} placeholderText='Custom' type='tip' valueChange={props.valueChange} />
                </div>
            </div>
        </div>
    )
}

export default Tip;