import './App.css';
import BillForm from './BillForm';
import BillValues from './BillValues';
import logo from './images/logo.svg';


function App() {

    const tips = [5, 10, 15, 25, 50, 'Custom'];

    return (
        <div className="App">
            <img className='logo' src={logo} />
            <div className='box'>
                <BillForm tips={tips} />
                <BillValues />
            </div>
        </div>
    );
}

export default App;
