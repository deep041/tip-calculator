import './BillForm.css';
import InputText from './widgets/InputText';
import Tip from './widgets/Tip';

function BillForm(prop) {
    return(
        <div className='form-div'>
            <div className='form'>
                <InputText title='Bill' />
                <Tip title='Select Tip %' tips={prop.tips} />
                <InputText title='Number of People' />
            </div>
        </div>
    );
}

export default BillForm;