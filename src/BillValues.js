import './BillValues.css';
import Button from "./widgets/Button";

function BillValues() {
    return(
        <div className='values-div'>
            <div className='values'>
                <div className='tip-person'>
                    <div className='left'>
                        <span className='amount'>Tip Amount</span>
                        <span className='person'>/ person</span>
                    </div>
                    <div className='right'>
                        $0.00
                    </div>
                </div>

                <div className='tip-person total'>
                    <div className='left'>
                        <span className='amount'>Total</span>
                        <span className='person'>/ person</span>
                    </div>
                    <div className='right'>
                        $0.00
                    </div>
                </div>
            </div>

            <Button title='RESET' />
        </div>
    );
}

export default BillValues;