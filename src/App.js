import { useState } from 'react';
import './App.css';
import BillForm from './components/BillForm';
import BillValues from './components/BillValues';
import logo from './images/logo.svg';


function App() {

    const tips = [5, 10, 15, 25, 50];
    const [state, setState] = useState({billPerPerson: 0, tipPerPerson: 0});
    const [isReset, setIsReset] = useState(false);
    const [isResetDisabled, setIsResetDisabled] = useState(true);

    function getBill(bill, tip) {
        setState({billPerPerson: bill, tipPerPerson: tip});
        setIsResetDisabled(false);
    }

    function reset() {
        setState({billPerPerson: 0, tipPerPerson: 0});
        setIsReset(true);
        setIsResetDisabled(true);
    }

    return (
        <div className="App">
            <img className='logo' src={logo} />
            <div className='box'>
                <BillForm tips={tips} getBill={getBill} reset={isReset} />
                <BillValues bill={state.billPerPerson} tip={state.tipPerPerson} reset={reset} isResetDisabled={isResetDisabled} />
            </div>
        </div>
    );
}

export default App;
