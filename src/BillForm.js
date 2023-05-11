import { useEffect, useState } from 'react';
import './BillForm.css';
import InputText from './widgets/InputText';
import Tip from './widgets/Tip';

function BillForm(props) {

    const [state, setState] = useState({ bill: '', tip: '', person: '' });

    useEffect(() => {
        calculateTip();
    }, [state]);

    useEffect(() => {
        setState({ bill: '', tip: '', person: '' });
    }, [props.reset]);

    function valueChange(type, value) {
        if (type === 'bill') {
            setState({...state, bill: value});
        } else if (type === 'tip') {
            setState({...state, tip: value});
        } else {
            setState({...state, person: value});
        }

        calculateTip();
    }

    function calculateTip() {
        if ((Number(state.bill) > 0) && (Number(state.person) > 0)) {
            props.getBill(Number(state.bill) / Number(state.person), 0)
        }

        if ((Number(state.bill) > 0) && (Number(state.person) > 0) && (Number(state.tip) > 0)) {
            let tip = (Number(state.bill) * Number(state.tip)) / 100;
            props.getBill((Number(state.bill) / Number(state.person)) + (tip / Number(state.person)), tip / Number(state.person))
        }
    }


    return(
        <div className='form-div'>
            <div className='form'>
                <InputText title='Bill' isShowIcon={true} icon='dollarIcon' type='bill' value={state.bill} valueChange={valueChange} />
                <Tip title='Select Tip %' tips={props.tips}  value={state.tip} type='tip' valueChange={valueChange} />
                <InputText title='Number of People' isShowIcon={true} value={state.person} type='person' valueChange={valueChange} />
            </div>
        </div>
    );
}

export default BillForm;